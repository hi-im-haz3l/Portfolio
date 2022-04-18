import { useState, useEffect, useCallback } from 'react'

export const WidthLowerThan = width => {
  const hasWindow = typeof window !== 'undefined'
  const getWindowDimensions = () => {
    if (hasWindow) return window.innerWidth <= width ? true : false
    return null
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const WidthLowerThanCompat = width => {
  const [windowDimensions, setWindowDimensions] = useState(false)
  const updateTarget = useCallback(e => {
    if (e.matches) setWindowDimensions(true)
    else setWindowDimensions(false)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)
    if (media.matches) setWindowDimensions(true)

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return windowDimensions
}
