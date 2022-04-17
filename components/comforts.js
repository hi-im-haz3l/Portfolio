import { Flex, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import ComfortsCore from './comforts-core'
import HScroll from './horizontal-scroll'
import { useState, useCallback, useEffect } from 'react'

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
  const Core = ComfortsCore()
  const segment = []
  const PagesCount = 2

  if (base == 't') {
    for (let o = 0; o < PagesCount; o++) {
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

  return base === 't' ? (
    <HScroll
      display={{ base: 'block', sm: 'none' }}
      tabs={segment}
      PagesIndexes={PagesCount - 1}
    />
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

const useMediaQuery = width => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback(e => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return targetReached
}

const Comforts = () => <Switch base={useMediaQuery(480) ? 't' : 'f'} />

export default Comforts
