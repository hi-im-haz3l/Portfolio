import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelModelLoader from '../voxel-model-loader'
import CursorGlow from '../cursor-glow'

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
      <meta property="og:url" content="https://portfolio.haz3l.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Khánh's Portfolio" />
      <meta
        property="og:description"
        content="Hi! I'm Lê Duy Khánh and this is my portfolio"
      />
      <meta
        property="og:image"
        content="https://portfolio.haz3l.dev/placeholder.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="portfolio.haz3l.dev" />
      <meta property="twitter:url" content="https://portfolio.haz3l.dev/" />
      <meta name="twitter:title" content="Khánh's Portfolio" />
      <meta
        name="twitter:description"
        content="Hi! I'm Lê Duy Khánh and this is my portfolio"
      />
      <meta
        name="twitter:image"
        content="https://portfolio.haz3l.dev/placeholder.png"
      />
    </Head>

    <NavBar
      currentPath={router.asPath}
      currentLocale={router.locale}
      windowWidth={windowWidth}
    />

    <Container maxW="container.md" pt={14}>
      <CursorGlow />
      <ATLASnPbody />

      {children}

      <Footer />
    </Container>
  </Box>
)

export default Main
