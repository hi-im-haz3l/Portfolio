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
  const LineColor = useColorModeValue('#c4c4c4', '#686868')

  return (
    <List pb={4}>
      {(events ?? []).map(({ title, description }, index) => {
        const isLastElement = index === events.length - 1
        const isFirstElement = index === 0
        const isMiddelElement =
          isFirstElement === false && isLastElement === false
        const shouldConnectDots = events.length > 1

        return (
          <ListItem key={title} pt={4} position="relative">
            {shouldConnectDots &&
              (isMiddelElement ? (
                <Box
                  left="15.5px"
                  position="absolute"
                  top={0}
                  bottom={0}
                  _before={{
                    content: '""',
                    position: 'absolute',
                    w: '3px',
                    h: '10px',
                    bg: LineColor
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    w: '3px',
                    h: 'calc(100% - 44px)',
                    bg: LineColor
                  }}
                />
              ) : (
                <Box
                  left="15.5px"
                  top={isFirstElement ? '51px' : 0}
                  w="3px"
                  bottom={0}
                  h={isLastElement ? '16px' : 'unset'}
                  position="absolute"
                  bg={LineColor}
                  mt={-1.5}
                />
              ))}
            <HStack
              w="full"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                minW="14px"
                h="14px"
                m="4px 10px 10px 10px"
                borderRadius="full"
                bg={AccentColor}
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
