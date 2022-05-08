import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt, FaFileSignature } from 'react-icons/fa'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { CustomBadge } from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Layout
      title={t({
        id: 'Works.Web.Ambersbakery.Title',
        defaultMessage: 'Undefined'
      })}
    >
      <Container>
        <Title parent={t({ id: 'Works.Title', defaultMessage: 'Undefined' })}>
          {t({
            id: 'Works.Web.Ambersbakery.Title',
            defaultMessage: 'Undefined'
          })}
          <Badge ml={3}>
            {t({
              id: 'Works.Web.Ambersbakery.Lifespan',
              defaultMessage: 'Undefined'
            })}
          </Badge>
        </Title>
        <Paragraph>
          {t({
            id: 'Works.Web.Ambersbakery.Description',
            defaultMessage: 'Undefined'
          })}
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <CustomBadge icon={<FaFileAlt />}>
              {t({ id: 'Works.Web.Badge.Demo', defaultMessage: 'Undefined' })}
            </CustomBadge>
            <Link
              variant="align_icon"
              target="_blank"
              href="https://portfolio.haz3l.duckdns.org/prototype/Ambersbakery"
            >
              Prototype/Ambersbakery
              <ExternalLinkIcon mx={1} />
            </Link>
          </ListItem>
          <ListItem>
            <CustomBadge icon={<FaFileSignature />}>
              {t({
                id: 'Works.Web.Badge.Backend',
                defaultMessage: 'Undefined'
              })}
            </CustomBadge>
            <Link
              variant="align_icon"
              target="_blank"
              href="https://portfolio.haz3l.duckdns.org/prototype/Ambersbakery/management"
            >
              {t({
                id: 'Works.Web.Ambersbakery.Management',
                defaultMessage: 'Undefined'
              })}
              <ExternalLinkIcon mx={1} />
            </Link>
          </ListItem>
          <ListItem>
            <CustomBadge icon={<GiPlatform />}>
              {t({
                id: 'Works.Web.Badge.Platform',
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
              {t({ id: 'Works.Web.Badge.Stack', defaultMessage: 'Undefined' })}
            </CustomBadge>
            <span>PHP 7.4, Bootstrap 5.1, jQuery 3.6, MariaDB 10.7</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/ambersbakery_landing.png"
          alt="LandingImage"
        />
        <WorkImage
          src="/images/works/ambersbakery_customize.png"
          alt="CustomizeImage"
        />
        <WorkImage src="/images/works/ambersbakery_cart.png" alt="CartImage" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
