import NextLink from 'next/link'
import {
  Tab,
  Tabs,
  TabList,
  TabIndicator,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

const LocaleId = {
  'en-US': 0,
  'fi-FI': 1,
  'vi-VN': 2,
  undefined: -1
}

const TabStyling = ({ locale, selected }) => {
  const color = useColorModeValue('gray200', 'whiteAlpha.900')
  const invertColor = useColorModeValue('#ffffff', '#1A202C')
  const title = locale.substring(0, 2).toUpperCase()

  return locale === selected ? (
    <Tab
      position="relative"
      zIndex={1}
      color={invertColor}
      fontWeight="semibold"
    >
      {title}
    </Tab>
  ) : (
    <NextLink href="" locale={locale} passHref>
      <Link color={color}>
        <Tab position="relative" zIndex={1} fontWeight="semibold">
          {title}
        </Tab>
      </Link>
    </NextLink>
  )
}

const LocalesSelector = ({ currentLocale }) => {
  const temp = LocaleId[currentLocale]
  const selected = temp + 1 ? temp : -1

  return (
    <Tabs position="relative" variant="unstyled" defaultIndex={selected}>
      <TabList>
        <TabStyling locale="en-US" selected={currentLocale}></TabStyling>
        <TabStyling locale="fi-FI" selected={currentLocale}></TabStyling>
        <TabStyling locale="vi-VN" selected={currentLocale}></TabStyling>
      </TabList>
      <TabIndicator
        mt="-40px"
        height="40px"
        bg={useColorModeValue('#375ba3', '#4fd1c5')}
        borderRadius="xl"
        boxShadow="lg"
      />
    </Tabs>
  )
}

export default LocalesSelector
