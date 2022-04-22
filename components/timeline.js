import {
  List,
  HStack,
  ListItem,
  VStack,
  Box,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useIntl } from 'react-intl'

const Events = ({ events }) => {
  const { formatMessage: t } = useIntl()
  const AccentColor = useColorModeValue('#385898', 'teal.200')
  const LineColor = useColorModeValue('#d3d3d3', '#686868')

  return (
    <List pb={4}>
      {(events ?? []).map(({ title, description }, index) => {
        const isLastElement = index === events.length - 1
        const isFirstElement = index === 0
        const shouldConnectDots = events.length > 1
        const TitleID = 'Home.Timeline.Content.' + title
        const DescriptionID = TitleID + '.Description'

        return (
          <ListItem key={title} zIndex={0} pt={4} position="relative">
            {shouldConnectDots && (
              <Box
                left="5px"
                top={isFirstElement ? 5 : 0}
                w="4px"
                bottom={0}
                h={isLastElement ? 5 : 'unset'}
                zIndex={-1}
                position="absolute"
                bg={LineColor}
              />
            )}
            <HStack
              w="full"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                minW="14px"
                h="14px"
                mt={1}
                borderRadius="full"
                bg={AccentColor}
              />
              <VStack w="full" spacing={2} textAlign="left">
                <Heading w="full" variant="timeline-title" textAlign="left">
                  {t({ id: TitleID, defaultMessage: 'Undefined' })}
                </Heading>
                <Text w="full" textAlign="left">
                  {!(typeof description === 'undefined') &&
                    t({ id: DescriptionID, defaultMessage: 'Undefined' })}
                </Text>
              </VStack>
            </HStack>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Events
