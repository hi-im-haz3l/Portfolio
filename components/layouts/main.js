import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelModelLoader from '../voxel-model-loader'

const ATLASnPbody = dynamic(() => import('../voxel-model'), {
  ssr: false,
  loading: () => <VoxelModelLoader />
})

const Main = ({ children, router, windowWidth }) => (
  <Box as="main" pb={8}>
    <Head>
      <title>Khánh&#x27;s Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Hi! I'm Lê Duy Khánh and this is my portfolio"
      />
      <meta name="author" content="Lê Duy Khánh" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
      <meta name="msapplication-TileColor" content="#333333" />
      <meta name="theme-color" content="#333333" />
      <meta name="github:card" content="summary_large_image" />
      <meta name="github:site" content="https://portfolio.haz3l.dev/" />
      <meta name="github:creator" content="@hi-im-haz3l" />
      <meta name="og:title" content="Khánh's Portfolio" />
      <meta name="og:site_name" content="Khánh's Portfolio" />
      <meta name="og:type" content="portfolio" />
      <meta name="og:image" content="https://portfolio.haz3l.dev/placeholder.png" />
      <meta
        name="og:description"
        content="Hi! I'm Lê Duy Khánh and this is my portfolio"
      />
      <meta name="og:email" content="haz3l@haz3l.duckdns.org" />
    </Head>

    <NavBar
      currentPath={router.asPath}
      currentLocale={router.locale}
      windowWidth={windowWidth}
    />

    <Container maxW="container.md" pt={14}>
      <ATLASnPbody />

      {children}

      <Footer />
    </Container>
  </Box>
)

export default Main
