import { Flex, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import ComfortsCore from './comforts-core'
import HScroll from './horizontal-scroll'
import { WidthLowerThanCompat } from './width-query'

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
    <HScroll tabs={segment} PagesIndexes={PagesCount - 1} />
  ) : (
    <SimpleGrid columns={[1, 1, 2]} spacing={3}>
      {core.map(({ title, icons }, i) => (
        <Comfort key={i}>
          <Heading>{title}</Heading>
          {icons}
        </Comfort>
      ))}
    </SimpleGrid>
  )
}

const Comforts = () => (
  <Switch base={WidthLowerThanCompat(480) ? 'y' : undefined} />
)

export default Comforts
