import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box
    w="100%"
    maxW={421}
    p={3}
    m="0 auto"
    textAlign="center"
    borderRadius="xl"
    _hover={{ bg: useColorModeValue('#f5f9ffb0', '#323232c4') }}
    transition="150ms"
  >
    <LinkBox cursor="pointer">
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
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    w="100%"
    maxW={421}
    p={3}
    m="0 auto"
    textAlign="center"
    borderRadius="xl"
    _hover={{ bg: useColorModeValue('#f5f9ffb0', '#323232c4') }}
    transition="150ms"
  >
    <NextLink href={`/works/${id}`} scroll={false} passHref>
      <LinkBox cursor="pointer">
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
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
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
