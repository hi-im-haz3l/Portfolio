import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { IntlProvider } from 'react-intl'
import 'focus-visible/dist/focus-visible'

import en from '../locales/en-US.json'
import vi from '../locales/vi-VN.json'
import fi from '../locales/fi-FI.json'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const messages = {
  'en-US': en,
  'vi-VN': vi,
  'fi-FI': fi
}

function Portfolio({ Component, pageProps, router }) {
  const { locale, defaultLocale } = router

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </IntlProvider>
  )
}

export default Portfolio
