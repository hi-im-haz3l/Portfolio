import {
  Box,
  Heading,
  Text,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import { RiPantoneLine } from 'react-icons/ri'
import { useIntl } from 'react-intl'
import Layout from '../components/layouts/article'
import SlidingButton from '../components/slide-button'
import DesertedGif from '../public/assets/deserted.gif'

const NotFound = () => {
  const { formatMessage: t } = useIntl()
  const returnHome = t({ id: '404.Return', defaultMessage: 'Undefined' })

  return (
    <Layout title={t({ id: '404.Title', defaultMessage: 'Undefined' })}>
      <Container>
        <Image
          src={DesertedGif}
          alt="deserted gif"
          width={131}
          height={78}
          style={{ filter: useColorModeValue('unset', 'invert(1)') }}
        />
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
