import { useState, useEffect } from 'react'

const WidthQuery = () => {
  const [windowDimensions, setWindowDimensions] = useState(null)

  useEffect(() => {
    const getWindowDimensions = () => {
      return Math.trunc(window.innerWidth /
        parseFloat(
          getComputedStyle(document.querySelector('body'))['font-size']
        )
      )
    }
    const handleResize = () => setWindowDimensions(getWindowDimensions())

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default WidthQuery
