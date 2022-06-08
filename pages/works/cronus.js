import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt, FaFileSignature } from 'react-icons/fa'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { SiGithub } from 'react-icons/si'
import { CustomBadge } from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()
  const images = ['/images/works/cronus_thumbnail_large.png']
  const alt = ['LandingImage']

  return (
    <Layout title="Cronus">
      <Container>
        <Title parent={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}>
          Cronus
          <Badge ml={3}>
            {t({
              id: 'Works.Web.Cronus.Lifespan',
              defaultMessage: 'Undefined'
            })}
          </Badge>
        </Title>
        <Paragraph>
          {t({
            id: 'Works.Web.Cronus.Description',
            defaultMessage: 'Undefined'
          })}
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <CustomBadge icon={<FaFileAlt />}>
              {t({ id: 'Works.Badge.Demo', defaultMessage: 'Undefined' })}
            </CustomBadge>
            <Link
              variant="align_icon"
              target="_blank"
              href="https://portfolio.haz3l.duckdns.org/prototype/Cronus"
            >
              Prototype/Cronus
              <ExternalLinkIcon mx={1} />
            </Link>
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
              href="https://github.com/hacklabmikkeli/cronus-bot"
            >
              <SiGithub />
              <Text ml={1}>Hacklabmikkeli/cronus-bot</Text>
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
            <span>PHP 7.4, jQuery 3.6, Python 3.8, Discord.py 1.7</span>
          </ListItem>
        </List>

        <WorkImage images={images} alt={alt} />
      </Container>
    </Layout>
  )
}

export default Work
