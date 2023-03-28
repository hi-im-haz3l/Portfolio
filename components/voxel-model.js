import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Vector3,
  Scene,
  WebGLRenderer,
  sRGBEncoding,
  OrthographicCamera,
  AmbientLight
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import LoadGLTFModel from '../lib/model'
import { ModelSpinner, ModelContainer } from './voxel-model-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelModel = () => {
  const refContainer = useRef()
  const [loaded, setLoaded] = useState(false)
  const [renderer, setRenderer] = useState(null)
  const [_camera, setCamera] = useState(null)
  const [target] = useState(new Vector3(1, 8, 0.3))
  const [initialCameraPosition] = useState(
    new Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))
  )
  const [scene] = useState(new Scene())
  const [_controls, setControls] = useState(null)

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)

      const scale = scH * 0.01 + 4.8

      _camera.left = -scale
      _camera.right = scale
      _camera.top = scale
      _camera.bottom = -scale

      _camera.updateProjectionMatrix()
    }
  }, [renderer])


  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const scale = scH * 0.01 + 4.8
      const camera = new OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      LoadGLTFModel(scene, '/assets/ATLASnPbody.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoaded(true)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 12
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => window.removeEventListener('resize', handleWindowResize, false)
  }, [renderer, handleWindowResize])

  return (
    <ModelContainer ref={refContainer}>
      {loaded || <ModelSpinner />}
    </ModelContainer>
  )
}

export default VoxelModel
