import { Box, useColorModeValue } from '@chakra-ui/react'

const IconBadge = ({ icon, children }) => {
  return (
    <Box
        p=".25rem .5rem"
        m=".25rem .75rem"
        bg={useColorModeValue('#c6f6d5', '#34403a')}
        color={useColorModeValue('green.800', 'green.200')}
        borderRadius="lg"
        display="inline-flex"
        alignItems="center"
        gridGap={1}
        fontSize="14px"
        fontWeight="semibold"
    >
        {icon}{children}
    </Box>
  )
}

export default IconBadge
