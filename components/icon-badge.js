import { Tooltip, Box, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

export const CustomBadge = ({ icon, children }) => (
  <Box
    p=".25rem .5rem"
    m=".25rem .75rem"
    display="inline-flex"
    borderRadius="lg"
    bg={useColorModeValue('#dbf7e4', '#34403a')}
    color={useColorModeValue('green.800', 'green.200')}
    alignItems="center"
    gridGap={1}
    fontSize={14}
    fontWeight="semibold"
  >
    {icon}
    {children}
  </Box>
)

export const IconBadge = ({
  icon,
  tooltip,
  bg = '#00000000',
  color = '#fff',
  borderColor
}) => {
  const defaultBorder = useColorModeValue('gray.300', 'whiteAlpha.300')
  const [isLabelOpen, setIsLabelOpen] = useState(false)

  return (
    <Tooltip label={tooltip} isOpen={isLabelOpen}>
      <Box
        p={2}
        as="button"
        aria-label={tooltip}
        border="1px solid"
        borderRadius="full"
        display="inline-flex"
        bg={bg}
        color={color}
        borderColor={
          typeof borderColor === 'undefined' ? defaultBorder : borderColor
        }
        _hover={{ transform: 'scale(1.1)' }}
        _focusVisible={{
          outline: useColorModeValue('none', '2px solid #ededee'),
          transform: 'scale(1.1)',
          bg: useColorModeValue('#e2e8f0', bg)
        }}
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      >
        {icon}
      </Box>
    </Tooltip>
  )
}
