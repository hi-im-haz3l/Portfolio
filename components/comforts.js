import dynamic from 'next/dynamic'
import { Flex, Box, useColorModeValue } from '@chakra-ui/react'
import ComfortsCore from './comforts-core'
import WidthLowerThan from './width-query'

const DynamicGrid = dynamic(() =>
  import('@chakra-ui/react').then(mod => mod.SimpleGrid)
)
const DynamicHScroll = dynamic(() => import('./horizontal-scroll'))

const Comfort = ({ children, ...props }) => (
  <Flex
    p=".75rem 1rem"
    maxW={[300, 'unset']}
    m={['0 auto', 0]}
    borderRadius="xl"
    bg={useColorModeValue('#ffffff4d', 'blackAlpha.300')}
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    fontSize={16}
    fontWeight="semibold"
    {...props}
  >
    {children}
  </Flex>
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
        core.slice(temp, temp + 3).map(({ title, icons }, i) => (
          <Comfort key={i} mb={3}>
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
      {core.map(({ title, icons }, i) => (
        <Comfort key={i}>
          <Heading>{title}</Heading>
          {icons}
        </Comfort>
      ))}
    </DynamicGrid>
  )
}

const Comforts = () => <Switch base={WidthLowerThan(480) && 'y'} />

export default Comforts
