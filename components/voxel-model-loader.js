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
  />
)

export const ModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-model"
    m="auto"
    mt={['0px', '-60px', '-120px']}
    mb={['-70px', '-130px', '-200px']}
    w={[290, 450, 640]}
    h={[290, 450, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => (
  <ModelContainer>
    <ModelSpinner />
  </ModelContainer>
)

export default Loader
