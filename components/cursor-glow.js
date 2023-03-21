import { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { useColorModeValue } from '@chakra-ui/react'

const rotate = keyframes(`
    from {
      rotate: 0deg;
    }
    
    50% {
      scale: 1 1.5;
    }
    
    to {
      rotate: 360deg;
    }
  `)

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`

const Blob = styled.div`
  background-color: white;
  height: 350px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  animation: ${rotate} 20s infinite;
  transition: opacity 0.7s;
`

const Blur = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(12vmax);
`

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [trailPos, setTrailPos] = useState({
    x: 0,
    y: 0,
    lastXDiff: 0,
    lastYDiff: 0
  })
  const [isVisible, setVisible] = useState(false)
  const trailRef = useRef(null)
  const animateRef = useRef(null)
  const lastTime = useRef(performance.now())

  const animateCursor = () => {
    if (!isVisible) {
      return
    }

    const xDiff = mousePos.x - trailPos.x
    const yDiff = mousePos.y - trailPos.y

    if (xDiff === trailPos.lastXDiff && yDiff === trailPos.lastYDiff) {
      return
    }

    const valueLimit = (target, limit) =>
      Math.abs(target) > limit ? Math.sign(target) * limit : target

    const time = performance.now()
    const timeDiff = valueLimit((time - lastTime.current) / 300, 0.05)
    const x = ~~(xDiff * timeDiff)
    const y = ~~(yDiff * timeDiff)

    setTrailPos(position => ({
      x: valueLimit(position.x + x, 1500),
      y: valueLimit(position.y + y, 1500),
      lastXDiff: xDiff,
      lastYDiff: yDiff
    }))

    trailRef.current.style.top = `${trailPos.y}px`
    trailRef.current.style.left = `${trailPos.x}px`
    lastTime.current = time
    animateRef.current = requestAnimationFrame(animateCursor)
  }

  useEffect(() => {
    animateRef.current = requestAnimationFrame(animateCursor)
    return () => cancelAnimationFrame(animateRef.current)
  }, [mousePos, trailPos])

  useEffect(() => {
    const handleEnter = () => setVisible(true)
    const handleLeave = () => {
      setVisible(false)
    }
    const updatePosition = e => setMousePos({ x: e.x, y: e.y })
    const updateTouchPosition = e => {
      const touch = e.touches[0]
      setMousePos({ x: touch.clientX, y: touch.clientY })
    }

    document.body.addEventListener('mouseenter', handleEnter)
    window.addEventListener('mousemove', updatePosition, false)
    document.body.addEventListener('mouseleave', handleLeave)

    document.body.addEventListener('touchstart', handleEnter)
    window.addEventListener('touchmove', updateTouchPosition, false)
    document.body.addEventListener('touchend', handleLeave)

    return () => {
      document.body.removeEventListener('mouseenter', handleEnter)
      window.removeEventListener('mousemove', updatePosition)
      document.body.removeEventListener('mouseleave', handleLeave)

      document.body.removeEventListener('touchstart', handleEnter)
      window.removeEventListener('touchmove', updateTouchPosition)
      document.body.removeEventListener('touchend', handleLeave)
      cancelAnimationFrame(animateRef.current)
    }
  }, [])

  return (
    <Container>
      <Blob
        ref={trailRef}
        style={{
          background: useColorModeValue('#9494c5', '#555'),
          opacity: isVisible ? '.8' : '0'
        }}
      />
      <Blur />
    </Container>
  )
}

export default CursorGlow
