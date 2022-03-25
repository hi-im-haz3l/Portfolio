import { Link, Box, useColorModeValue } from '@chakra-ui/react'
import { useIntl } from 'react-intl'

const Footer = () => {
  const { formatMessage: t } = useIntl()
  const AccentColor = useColorModeValue('facebook', 'teal.200')
  
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {t({id: 'Footer', defaultMessage: 'Undefined'})} <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/hi-im-haz3l"
        color={AccentColor}
      >
        @hi-im-haz3l
      </Link>
    </Box>
  )
}

export default Footer