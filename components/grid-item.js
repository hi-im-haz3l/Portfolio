import Image from 'next/image'
import {
  Box,
  Text,
  Badge,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { CondensedTitle } from './work'
import { Global } from '@emotion/react'

export const HrefGridItem = ({
  children,
  href,
  title,
  thumbnail,
  lifespan
}) => (
  <LinkBox
    w="100%"
    maxW={421}
    p={3}
    m="0 auto"
    textAlign="center"
    borderRadius="xl"
    _hover={{ bg: useColorModeValue('#f5f9ffb0', '#323232c4') }}
    transition="150ms"
    cursor="pointer"
  >
    <Box
      display="flex"
      borderRadius=".75em"
      boxShadow={useColorModeValue(
        '#20202363 0 .3em 1em',
        '#00000063 0 .3em 1em'
      )}
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
    </Box>
    <LinkOverlay href={href} target="_blank">
      <CondensedTitle>
        {title}
        <Badge ml={3}>{lifespan}</Badge>
      </CondensedTitle>
    </LinkOverlay>
    <Text fontSize={14}>{children}</Text>
  </LinkBox>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: .75em
      }
    `}
  />
)
