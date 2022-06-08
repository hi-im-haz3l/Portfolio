import NextLink from 'next/link'
import { useState, useCallback } from 'react'
import { Heading, Box, Image, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ImageViewer from 'react-simple-image-viewer'

export const Title = ({ parent, children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>{parent}</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ images, alt }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const openImageViewer = useCallback(i => {
    setCurrentImage(i)
    setIsViewerOpen(true)
  }, [])
  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={i}
          w="full"
          mb={4}
          borderRadius="lg"
          src={src}
          alt={alt[i]}
          onClick={() => openImageViewer(i)}
        />
      ))}
      {isViewerOpen && (
        <Box position="absolute" zIndex={3}>
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: 'rgba(0,0,0,0.75)'
            }}
            closeOnClickOutside={true}
          />
        </Box>
      )}
    </>
  )
}
