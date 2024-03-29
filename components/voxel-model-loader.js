import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
    speed="0.6s"
  />
)

export const ModelContainer = forwardRef(({ children }, ref) => (
  <Box w="100%" display="flex" justifyContent="center">
    <Box
      ref={ref}
      className="voxel-model"
      m="auto"
      mt={['0', '-3.75em', '-7.5em']}
      mb={['-4.4em', '-8.2em', '-12.5em']}
      w={['18.2em', '28.2em', '40em']}
      h={['18.2em', '28.2em', '40em']}
      position="relative"
    >
      {children}
    </Box>
  </Box>
))

const Loader = () => (
  <ModelContainer>
    <ModelSpinner />
  </ModelContainer>
)

export default Loader
