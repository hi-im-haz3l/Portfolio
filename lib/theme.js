import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#e2e8f0', '#202023')(props),
      '&::-webkit-scrollbar': {
        w: '.7em'
      },
      '&::-webkit-scrollbar-track': {
        bg: mode('#d5d5d5', '#272727')(props)
      },
      '&::-webkit-scrollbar-thumb': {
        bg: mode('#bfbfbf', '#686868')(props)
      },
      '&::-webkit-scrollbar-thumb:hover': {
        bg: mode('#afafaf', '#7b7b7b')(props)
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
        mt: 3,
        mb: 4
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
      no_underline: {
        _hover: {
          textDecoration: 'none'
        }
      },
      align_icon: {
        display: 'inline-flex',
        alignItems: 'center'
      },
      link_btn: {
        p: '.5rem 1rem',
        mb: 1,
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 'md',
        gridGap: 2,
        fontSize: 16,
        fontWeight: 'semibold'
      }
    }
  },
  Divider: {
    baseStyle: props => ({
      borderColor: mode('#bbb', '#666')(props)
    })
  }
}

const fonts = {
  heading: 'M PLUS Rounded 1c'
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
