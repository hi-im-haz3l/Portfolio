import { HStack, Flex, useColorModeValue } from '@chakra-ui/react'
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine
} from 'react-icons/ri'

const Rating = ({ comfortability, children }) => {
  const fields = []
  for (let i = 1; i <= 5; i++) {
    if (i <= comfortability) fields.push(<RiCheckboxBlankCircleFill />)
    else fields.push(<RiCheckboxBlankCircleLine />)
  }

  return (
    <Flex
      color={useColorModeValue('#1a202c', '#e3e3e3')}
      alignItems="center"
      justifyContent="space-between"
      fontSize="16px"
      fontWeight="semibold"
    >
      {children}
      <HStack>{fields}</HStack>
    </Flex>
  )
}

export default Rating
