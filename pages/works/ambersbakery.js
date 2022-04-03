import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt, FaFileSignature } from 'react-icons/fa'
import { GiPlatform, GiStack } from 'react-icons/gi'
import IconBadge from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Layout title={t({ id: 'Works.Web.Ambersbakery.Title', defaultMessage: 'Undefined' })}>
      <Container>
        <Title>
          {t({ id: 'Works.Web.Ambersbakery.Title', defaultMessage: 'Undefined' })}
          <Badge ml={3}>
            {t({ id: 'Works.Web.Ambersbakery.Lifespan', defaultMessage: 'Undefined' })}
          </Badge>
        </Title>
        <P>
          {t({ id: 'Works.Web.Ambersbakery.Description', defaultMessage: 'Undefined' })}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <IconBadge icon={<FaFileAlt />}>
              {t({ id: 'Works.Web.Badge.Demo', defaultMessage: 'Undefined' })}
            </IconBadge>
            <Link target="_blank" href="https://portfolio.haz3l.duckdns.org/prototype/Ambersbakery">
              Prototype/Ambersbakery
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <IconBadge icon={<FaFileSignature />}>
              {t({ id: 'Works.Web.Badge.Backend', defaultMessage: 'Undefined' })}
            </IconBadge>
            <Link target="_blank" href="https://portfolio.haz3l.duckdns.org/prototype/Ambersbakery/management">
              {t({ id: 'Works.Web.Ambersbakery.Management', defaultMessage: 'Undefined' })}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <IconBadge icon={<GiPlatform />}>
              {t({ id: 'Works.Web.Badge.Platform', defaultMessage: 'Undefined' })}
            </IconBadge>
            <span>
              {t({ id: 'Works.Web.Platform.Description', defaultMessage: 'Undefined' })}
            </span>
          </ListItem>
          <ListItem>
            <IconBadge icon={<GiStack />}>
              {t({ id: 'Works.Web.Badge.Stack', defaultMessage: 'Undefined' })}
            </IconBadge>
            <span>
              PHP 7.4, Bootstrap 5.1, jQuery 3.6, MariaDB 10.7
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/ambersbakery_landing.png" alt="LandingImage" />
        <WorkImage src="/images/works/ambersbakery_customize.png" alt="CustomizeImage" />
        <WorkImage src="/images/works/ambersbakery_cart.png" alt="CartImage" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
