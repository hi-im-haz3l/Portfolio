import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Collapse
} from '@chakra-ui/react'
import {
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon
} from '@chakra-ui/icons'
import { JustifyParagraph } from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Comforts from '../components/comforts'
import {
  IoLogoStackoverflow,
  IoLogoLinkedin,
  IoLogoGithub
} from 'react-icons/io5'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import Events from '../components/timeline'
import timeline from '../data/timeline.json'
import { useState } from 'react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { formatMessage: t } = useIntl()
  const AccentColor = useColorModeValue('#385898', 'teal.200')
  const HoverColor = useColorModeValue('#f0f2f5', '#464646')
  const BtnTextColor = useColorModeValue('#979797', '#ededee')
  const CollapseShadow = useColorModeValue(
    '0px -20px 20px -23px #000',
    '0px -30px 20px -20px #000'
  )
  const [show, setShow] = useState(false)
  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          {t({ id: 'Home.Greeting', defaultMessage: 'Undefined' })}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Lê Duy Khánh
            </Heading>
            <p>{t({ id: 'Home.Hobby', defaultMessage: 'Undefined' })}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/sad_keanu.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section mb={7} delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Bio.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <JustifyParagraph>
            {t({ id: 'Home.Bio.Content', defaultMessage: 'Undefined' })}
          </JustifyParagraph>
          <Box align="center" mt={4}>
            <NextLink href="/works" scroll={false} passHref>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('facebook', 'teal')}
                boxShadow="lg"
              >
                {t({ id: 'Home.Works.Button', defaultMessage: 'Undefined' })}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section mb={8} delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Comfortable.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <Comforts />
        </Section>

        <Section mb={6} delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Timeline.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <Collapse startingHeight={531} in={show} duration={5000}>
            <List spacing={4} mb={-4}>
              {(timeline ?? []).map(({ year, events }) => (
                <ListItem key={year}>
                  <Heading variant="year-title">{year}</Heading>
                  <Events events={events} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <Box
            left="-5%"
            width="110%"
            position="relative"
            boxShadow={show ? undefined : CollapseShadow}
            align="center"
            overflow="auto"
          >
            <Button
              variant="ghost"
              display="flex"
              mt={2}
              mb={1}
              p=".25em .75em"
              h="auto"
              flexDirection="column"
              color={useColorModeValue('#979797', '#686868')}
              _hover={{ bg: HoverColor, color: BtnTextColor }}
              onClick={handleToggle}
            >
              {show ? <ChevronUpIcon /> : undefined}
              {show ? 'Collapse' : 'Expand'}
              {show ? undefined : <ChevronDownIcon />}
            </Button>
          </Box>
        </Section>

        <Section mb={4} delay={0.4}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Social.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <List>
            <ListItem>
              <Link
                variant="link_btn"
                color={AccentColor}
                _hover={{ bg: HoverColor }}
                href="https://www.linkedin.com/in/haz3l/"
                target="_blank"
              >
                <IoLogoLinkedin />
                Lê Duy Khánh
              </Link>
            </ListItem>
            <ListItem>
              <Link
                variant="link_btn"
                color={AccentColor}
                _hover={{ bg: HoverColor }}
                href="https://github.com/hi-im-haz3l"
                target="_blank"
              >
                <IoLogoGithub />
                @hi-im-haz3l
              </Link>
            </ListItem>
            <ListItem>
              <Link
                variant="link_btn"
                color={AccentColor}
                _hover={{ bg: HoverColor }}
                href="https://stackoverflow.com/users/11005113/haz3l"
                target="_blank"
              >
                <IoLogoStackoverflow />
                Haz3L
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
