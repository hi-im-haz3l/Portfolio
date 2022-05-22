import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl'
import 'focus-visible/dist/focus-visible'
import Theme from '../lib/theme'
import WidthQuery from '../components/width-query'

import en from '../data/locales/en-US.json'
import vi from '../data/locales/vi-VN.json'
import fi from '../data/locales/fi-FI.json'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const messages = {
  'en-US': en,
  'vi-VN': vi,
  'fi-FI': fi
}

function Portfolio({ Component, pageProps, router }) {
  const { locale } = router
  const windowWidth = WidthQuery()

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <ChakraProvider theme={Theme}>
        <Fonts />
        <Layout router={router} windowWidth={windowWidth}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component
              key={router.route}
              windowWidth={windowWidth}
              {...pageProps}
            />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </IntlProvider>
  )
}

export default Portfolio
