import NextLink from 'next/link'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt } from 'react-icons/fa'
import { GiPlatform, GiStack } from 'react-icons/gi'
import IconBadge from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Layout
      title={t({ id: 'Works.Web.khanhsportfolio.Title', defaultMessage: 'Undefined' })}
    >
      <Container>
        <Title>
          {t({ id: 'Works.Web.khanhsportfolio.Title', defaultMessage: 'Undefined' })}
          <Badge ml={3}>
            {t({ id: 'Works.Web.khanhsportfolio.Lifespan', defaultMessage: 'Undefined' })}
          </Badge>
        </Title>
        <P>
          {t({ id: 'Works.Web.khanhsportfolio.Description', defaultMessage: 'Undefined' })}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <IconBadge icon={<FaFileAlt />}>
              {t({ id: 'Works.Web.Badge.Demo', defaultMessage: 'Undefined' })}
            </IconBadge>
            <NextLink href="/" passHref>
              <Link>
                {t({ id: 'Button.Return', defaultMessage: 'Undefined' })}
              </Link>
            </NextLink>
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
              Next.js, Chakra UI, Emotion, Three.js, Framer Motion
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/khanhsportfolio_landing.png" alt="LandingImage" />
        <WorkImage src="/images/works/khanhsportfolio_works.png" alt="WorksImage" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
