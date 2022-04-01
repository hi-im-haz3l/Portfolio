import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#e2e8f0', '#202023')(props),
      '&::-webkit-scrollbar': {
        width: '11px'
      },
      '&::-webkit-scrollbar-track': {
        bg: mode('#ebebeb', '#272727')(props)
      },
      '&::-webkit-scrollbar-thumb': {
        bg: mode('#c1c1c1', '#686868')(props)
      },
      '&::-webkit-scrollbar-thumb:hover': {
        bg: mode('#b3b3b3', '#7b7b7b')(props)
      }
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4
      },
      'year-title': {
        fontSize: 18
      },
      'timeline-title': {
        fontSize: 16
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    }),
    variants: {
      'no-underline': {
        _hover: {
          textDecoration: 'none'
        }
      }
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
