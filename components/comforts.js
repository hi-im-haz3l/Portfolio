import dynamic from 'next/dynamic'
import { Box, useColorModeValue } from '@chakra-ui/react'
import ComfortsCore from './comforts-core'

const DynamicGrid = dynamic(() =>
  import('@chakra-ui/react').then(mod => mod.SimpleGrid)
)
const DynamicHScroll = dynamic(() => import('./horizontal-scroll'))

const Comfort = ({ children, ...props }) => (
  <Box
    display="flex"
    p=".75rem 1rem"
    borderRadius="xl"
    bg={useColorModeValue('#ffffff63', '#16161680')}
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    fontSize={16}
    fontWeight="semibold"
    {...props}
  >
    {children}
  </Box>
)

const Heading = ({ children }) => <Box w={[200, 150, 200]}>{children}</Box>

const Switch = ({ base }) => {
  const core = ComfortsCore()
  const segment = []
  const PagesCount = 2

  if (base) {
    for (let o = 0; o < PagesCount; o++) {
      let temp = o * 3
      segment.push(
        core.slice(temp, temp + 3).map(({ title, icons }) => (
          <Comfort
            key={`comfort-mobile-${title}`}
            m="0 auto"
            mb={3}
            maxW="80%"
            minW={240}
          >
            <Heading>{title}</Heading>
            {icons}
          </Comfort>
        ))
      )
    }
  }

  return base ? (
    <DynamicHScroll tabs={segment} PagesIndexes={PagesCount - 1} />
  ) : (
    <DynamicGrid columns={[1, 1, 2]} spacing={3}>
      {core.map(({ title, icons }) => (
        <Comfort key={`comfort-full-${title}`}>
          <Heading>{title}</Heading>
          {icons}
        </Comfort>
      ))}
    </DynamicGrid>
  )
}

const Comforts = ({ windowWidth }) => <Switch base={windowWidth < 30 && true} />

export default Comforts
