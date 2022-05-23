import NextLink from 'next/link'
import { Text, Button, Box, useColorModeValue } from '@chakra-ui/react'

const SlidingButton = ({ ariaLabel, icon, colorScheme, href, children }) => {
  const defaultScheme = useColorModeValue('facebook', 'teal')

  return (
    <NextLink href={href} scroll={false} passHref>
      <Button
        pr={2.5}
        colorScheme={
          typeof colorScheme === 'undefined' ? defaultScheme : colorScheme
        }
        boxShadow="lg"
        _hover={{
          '&>div': { transform: 'translateX(0)', opacity: '1' },
          '&>p': { transform: 'translateX(0)' }
        }}
        aria-label={ariaLabel}
      >
        <Text transform="translateX(7px)" transition="300ms">
          {children}
        </Text>
        <Box
          ml={1}
          transform="translateX(-7px)"
          opacity="0"
          transition="300ms"
          display="flex"
        >
          {icon}
        </Box>
      </Button>
    </NextLink>
  )
}

export default SlidingButton
