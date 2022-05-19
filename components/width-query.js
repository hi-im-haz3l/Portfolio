import { useState, useEffect } from 'react'

const WidthLowerThan = width => {
  const getWindowDimensions = () => {
    return window.innerWidth /
      parseFloat(
        getComputedStyle(document.querySelector('body'))['font-size']
      ) <
      width
      ? true
      : false
  }

  const [windowDimensions, setWindowDimensions] = useState(null)

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions())

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default WidthLowerThan
