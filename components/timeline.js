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

const Events = ({ year, events }) => {
  const { formatMessage: t } = useIntl()
  const AccentColor = useColorModeValue('#385898', 'teal.200')
  const LineColor = useColorModeValue('#d3d3d3', '#686868')
  const BackgroundColor = useColorModeValue(
    '10px solid #e2e8f0',
    '10px solid #202023'
  )

  return (
    <List pb={4}>
      {(events ?? []).map(({ title, description }, index) => {
        const isLastElement = index === events.length - 1
        const isFirstElement = index === 0
        const shouldConnectDots = events.length > 1

        return (
          <ListItem key={title} pt={4} position="relative">
            {shouldConnectDots && (
              <Box
                left="15.5px"
                top={isFirstElement ? 5 : 0}
                w="3px"
                bottom={0}
                h={isLastElement ? 5 : 'unset'}
                zIndex={-1}
                position="absolute"
                bg={LineColor}
                mt={-1.5}
              />
            )}
            <HStack
              w="full"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                minW="34px"
                h="34px"
                mt={-1.5}
                borderRadius="full"
                bg={AccentColor}
                border={BackgroundColor}
              />
              <VStack w="full" spacing={2} textAlign="left">
                <Heading w="full" variant="timeline-title" textAlign="left">
                  {t({
                    id: `Home.Timeline.Content.${year}.${title}`,
                    defaultMessage: 'Undefined'
                  })}
                </Heading>
                <Text w="full" textAlign="left">
                  {typeof description === 'undefined' ||
                    t({
                      id: `Home.Timeline.Content.${year}.${title}.Description`,
                      defaultMessage: 'Undefined'
                    })}
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
