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
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoStackoverflow, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import { useIntl } from 'react-intl'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { formatMessage: t } = useIntl()
  const AccentColor = useColorModeValue('facebook', 'teal.200')
  const SocialHoverColor = useColorModeValue('#f0f2f5', '#525255')

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
          {t({id: 'Home.Greeting', defaultMessage: 'Undefined'})}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Lê Duy Khánh
            </Heading>
            <p>
              {t({id: 'Home.Description', defaultMessage: 'Undefined'})}
            </p>
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
              overflow='hidden'
            >
              <ProfileImage
                src="/images/sad_keanu.jpg"
                alt="Profile image"
                borderRadius='full'
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t({id: 'Home.Bio.Title', defaultMessage: 'Undefined'})}
          </Heading>
          <Paragraph>
            {t({id: 'Home.Bio.Content', defaultMessage: 'Undefined'})}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button 
              rightIcon={<ChevronRightIcon />} 
              colorScheme={useColorModeValue('facebook', 'teal')}
              >
                {t({id: 'Home.Works.Button', defaultMessage: 'Undefined'})}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t({id: 'Home.Timeline.Title', defaultMessage: 'Undefined'})}
          </Heading>
          <BioSection>
            <BioYear>
              {t({id: 'Home.Timeline.Year.02', defaultMessage: 'Undefined'})}
            </BioYear>
            {t({id: 'Home.Timeline.Content.02', defaultMessage: 'Undefined'})}
          </BioSection>
          <BioSection>
            <BioYear>
              {t({id: 'Home.Timeline.Year.14', defaultMessage: 'Undefined'})}
            </BioYear>
            {t({id: 'Home.Timeline.Content.14', defaultMessage: 'Undefined'})}
          </BioSection>
          <BioSection>
            <BioYear>
              {t({id: 'Home.Timeline.Year.17', defaultMessage: 'Undefined'})}
            </BioYear>
            {t({id: 'Home.Timeline.Content.17', defaultMessage: 'Undefined'})}
          </BioSection>
          <BioSection>
            <BioYear>
              {t({id: 'Home.Timeline.Year.21', defaultMessage: 'Undefined'})}
              -
              {t({id: 'Timeline.Now', defaultMessage: 'Undefined'})}
            </BioYear>
            {t({id: 'Home.Timeline.Content.21', defaultMessage: 'Undefined'})}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t({id: 'Home.Hobbies.Title', defaultMessage: 'Undefined'})}
          </Heading>
          <Paragraph>
            {t({id: 'Home.Hobbies.Content', defaultMessage: 'Undefined'})}
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            {t({id: 'Home.Social.Title', defaultMessage: 'Undefined'})}
          </Heading>
          <List>
            <ListItem>
              <Link
                variant="no-underline"
                href="https://www.linkedin.com/in/haz3l/"
                target="_blank"
                color={AccentColor}
                _focus={{ boxShadow: 'none' }}
              >
                <Button
                  variant="ghost"
                  colorScheme={AccentColor}
                  leftIcon={<IoLogoLinkedin />}
                  _hover={{ bg: SocialHoverColor }}
                >
                  Lê Duy Khánh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                variant="no-underline"
                href="https://github.com/hi-im-haz3l"
                target="_blank"
                color={AccentColor}
                _focus={{ boxShadow: 'none' }}
              >
                <Button
                  variant="ghost"
                  colorScheme={AccentColor}
                  leftIcon={<IoLogoGithub />}
                  _hover={{ bg: SocialHoverColor }}
                >
                  @hi-im-haz3l
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                variant="no-underline"
                href="https://stackoverflow.com/users/11005113/haz3l"
                target="_blank"
                color={AccentColor}
                _focus={{ boxShadow: 'none' }}
              >
                <Button
                  variant="ghost"
                  colorScheme={AccentColor}
                  leftIcon={<IoLogoStackoverflow />}
                  _hover={{ bg: SocialHoverColor }}
                >
                  Haz3L
                </Button>
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