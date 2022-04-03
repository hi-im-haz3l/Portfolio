import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt } from 'react-icons/fa'
import { GiPlatform, GiStack } from 'react-icons/gi'
import IconBadge from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Layout
      title={t({ id: 'Works.Web.Stickynote.Title', defaultMessage: 'Undefined' })}
    >
      <Container>
        <Title>
          {t({ id: 'Works.Web.Stickynote.Title', defaultMessage: 'Undefined' })}
          <Badge ml={3}>
            {t({ id: 'Works.Web.Stickynote.Lifespan', defaultMessage: 'Undefined' })}
          </Badge>
        </Title>
        <Paragraph>
          {t({ id: 'Works.Web.Stickynote.Description', defaultMessage: 'Undefined' })}
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <IconBadge icon={<FaFileAlt />}>
              {t({ id: 'Works.Web.Badge.Demo', defaultMessage: 'Undefined' })}
            </IconBadge>
            <Link target="_blank" href="https://portfolio.haz3l.duckdns.org/prototype/Stickynote">
              Prototype/Stickynote
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
              PHP 7.4, jQuery 3.6, Bootstrap 5.1, MariaDB 10.7
          </ListItem>
        </List>

        <WorkImage src="/images/works/stickynote_landing.png" alt="LandingImage" />
        <WorkImage src="/images/works/stickynote_edit.png" alt="EditImage" />
        <WorkImage src="/images/works/stickynote_merge.png" alt="MergeImage" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
