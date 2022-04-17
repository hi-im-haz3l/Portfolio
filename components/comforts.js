import { Flex, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import ComfortsCore from './comforts-core'
import HScroll from './horizontal-scroll'

const Comfort = ({ children, ...props }) => (
  <Flex
    p=".75rem 1rem"
    maxW={[300, 'unset']}
    m={['0 auto', 0]}
    borderRadius="xl"
    bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.300')}
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
  const Core = ComfortsCore()
  const segment = []
  if (base == 't') {
    for (let o = 0; o < 2; o++) {
      let temp = o * 3
      segment.push(
        Core.slice(temp, temp + 3).map(({ title, icons }, i) => (
          <Comfort key={i} mb={3}>
            <Heading>{title}</Heading>
            {icons}
          </Comfort>
        ))
      )
    }
  }

  return base == 't' ? (
    <HScroll display={{ base: 'block', sm: 'none' }} tabs={segment} />
  ) : (
    <SimpleGrid
      display={{ base: 'none', sm: 'grid' }}
      columns={[1, 1, 2]}
      spacing={3}
    >
      {Core.map(({ title, icons }, i) => (
        <Comfort key={i}>
          <Heading>{title}</Heading>
          {icons}
        </Comfort>
      ))}
    </SimpleGrid>
  )
}

const Comforts = () => (
  <Box>
    <Switch base="t" />
    <Switch base="f" />
  </Box>
)

export default Comforts
