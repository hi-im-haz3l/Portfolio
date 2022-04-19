import { useState, useEffect } from 'react'

const WidthLowerThan = width => {
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

export default WidthLowerThan
