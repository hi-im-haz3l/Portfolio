import NextLink from 'next/link'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt } from 'react-icons/fa'
import { GiPlatform, GiStack } from 'react-icons/gi'
import { CustomBadge } from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Layout
      title={t({
        id: 'Works.Web.khanhsportfolio.Title',
        defaultMessage: 'Undefined'
      })}
    >
      <Container>
        <Title parent={t({ id: 'Works.Title', defaultMessage: 'Undefined' })}>
          {t({
            id: 'Works.Web.khanhsportfolio.Title',
            defaultMessage: 'Undefined'
          })}
          <Badge ml={3}>
            {t({
              id: 'Works.Web.khanhsportfolio.Lifespan',
              defaultMessage: 'Undefined'
            })}
          </Badge>
        </Title>
        <Paragraph>
          {t({
            id: 'Works.Web.khanhsportfolio.Description',
            defaultMessage: 'Undefined'
          })}
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <CustomBadge icon={<FaFileAlt />}>
              {t({ id: 'Works.Web.Badge.Demo', defaultMessage: 'Undefined' })}
            </CustomBadge>
            <NextLink href="/" passHref>
              <Link variant="align_icon">
                {t({ id: 'Button.Return', defaultMessage: 'Undefined' })}
                <LinkIcon mx={1} />
              </Link>
            </NextLink>
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
            <CustomBadge icon={<GiStack />}>
              {t({ id: 'Works.Web.Badge.Stack', defaultMessage: 'Undefined' })}
            </CustomBadge>
            <span>Next.js, Chakra UI, Emotion, Three.js, Framer Motion</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/khanhsportfolio_landing.png"
          alt="LandingImage"
        />
        <WorkImage
          src="/images/works/khanhsportfolio_works.png"
          alt="WorksImage"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
