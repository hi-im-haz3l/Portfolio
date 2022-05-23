import { Box, Heading, Text, Container } from '@chakra-ui/react'
import { RiPantoneLine } from 'react-icons/ri'
import { useIntl } from 'react-intl'
import Layout from '../components/layouts/article'
import SlidingButton from '../components/slide-button'

const NotFound = () => {
  const { formatMessage: t } = useIntl()
  const returnHome = t({ id: '404.Return', defaultMessage: 'Undefined' })

  return (
    <Layout title={t({ id: '404.Title', defaultMessage: 'Undefined' })}>
      <Container>
        <Heading as="h1">
          {t({ id: '404.Header', defaultMessage: 'Undefined' })}
        </Heading>
        <Text>{t({ id: '404.Description', defaultMessage: 'Undefined' })}</Text>
        <Box my={6} align="center">
          <SlidingButton
            ariaLabel={returnHome}
            icon={<RiPantoneLine />}
            href="/"
          >
            {returnHome}
          </SlidingButton>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
