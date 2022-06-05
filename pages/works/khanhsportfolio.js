import NextLink from 'next/link'
import {
  Container,
  Box,
  Badge,
  Link,
  Text,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt, FaFileSignature } from 'react-icons/fa'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { SiGithub } from 'react-icons/si'
import { CustomBadge } from '../../components/icon-badge'
import { RiPantoneLine } from 'react-icons/ri'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()
  const images = ["/images/works/khanhsportfolio_thumbnail_large.png", "/images/works/khanhsportfolio_works.png"]
  const alt = ["Thumbnail", "WorksImage"]

  return (
    <Layout title="Khánh's Portfolio">
      <Container>
        <Title parent={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}>
          Khánh&apos;s Portfolio
          <Badge ml={3}>
            {t({
              id: 'Works.Web.KhanhsPortfolio.Lifespan',
              defaultMessage: 'Undefined'
            })}
          </Badge>
        </Title>
        <Paragraph>
          {t({
            id: 'Works.Web.KhanhsPortfolio.Description',
            defaultMessage: 'Undefined'
          })}
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <CustomBadge icon={<FaFileAlt />}>
              {t({ id: 'Works.Badge.Demo', defaultMessage: 'Undefined' })}
            </CustomBadge>
            <NextLink href="/" passHref>
              <Link variant="align_icon">
                {t({ id: 'Button.Return', defaultMessage: 'Undefined' })}
                <Box mx={1}>
                  <RiPantoneLine />
                </Box>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <CustomBadge icon={<FaFileSignature />}>
              {t({
                id: 'Works.Source',
                defaultMessage: 'Undefined'
              })}
            </CustomBadge>
            <Link
              variant="align_icon"
              target="_blank"
              href="https://github.com/hi-im-haz3l/portfolio"
            >
              <SiGithub />
              <Text ml={1}>hi-im-haz3l/Portfolio</Text>
              <ExternalLinkIcon mx={1} />
            </Link>
          </ListItem>
          <ListItem>
            <CustomBadge icon={<GiPlatform />}>
              {t({
                id: 'Works.Badge.Platform',
                defaultMessage: 'Undefined'
              })}
            </CustomBadge>
            <span>
              {t({
                id: 'Works.Web.Platform.Description',
                defaultMessage: 'Undefined'
              })}
            </span>
          </ListItem>
          <ListItem>
            <CustomBadge icon={<RiCodeSSlashFill />}>
              {t({ id: 'Works.Badge.Stack', defaultMessage: 'Undefined' })}
            </CustomBadge>
            <span>Next.js, Chakra UI, Emotion, Three.js, Framer Motion</span>
          </ListItem>
        </List>

        <WorkImage images={images} alt={alt} />
      </Container>
    </Layout>
  )
}

export default Work
