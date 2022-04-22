import NextLink from 'next/link'
import { Heading, Box, Image, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

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

export const WorkImage = ({ src, alt }) => (
  <Image w="full" mb={4} borderRadius="lg" src={src} alt={alt} />
)
