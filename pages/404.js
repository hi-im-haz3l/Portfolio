import { Box, Heading, Text, Container } from '@chakra-ui/react'
import { RiPantoneLine } from 'react-icons/ri'
import { useIntl } from 'react-intl'
import SlidingButton from '../components/slide-button'

const NotFound = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Container>
      <Heading as="h1">
        {t({ id: '404.Title', defaultMessage: 'Undefined' })}
      </Heading>
      <Text>{t({ id: '404.Description', defaultMessage: 'Undefined' })}</Text>
      <Box my={6} align="center">
        <SlidingButton icon={<RiPantoneLine />} href="/">
          {t({ id: '404.Return', defaultMessage: 'Undefined' })}
        </SlidingButton>
      </Box>
    </Container>
  )
}

export default NotFound
