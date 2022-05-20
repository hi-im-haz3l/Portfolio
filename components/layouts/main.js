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
      <meta name="description" content="Khánh&#x27;s Portfolio" />
      <meta name="author" content="Lê Duy Khánh" />
      <meta name="theme-color" content="#2d2d2d" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="github:card" content="summary_large_image" />
      <meta name="github:site" content="@hi-im-haz3l" />
      <meta name="github:creator" content="@hi-im-haz3l" />
      <meta property="og:site_name" content="Khánh&#x27;s Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/placeholder.png" />
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
