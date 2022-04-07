import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { useIntl } from 'react-intl'

const NotFound = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Container>
      <Heading as="h1">
        {t({ id: '404.Title', defaultMessage: 'Undefined' })}
      </Heading>
      <Text>{t({ id: '404.Description', defaultMessage: 'Undefined' })}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">
            {t({ id: 'Button.Return', defaultMessage: 'Undefined' })}
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
