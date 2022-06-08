import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FaFileAlt } from 'react-icons/fa'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { CustomBadge } from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()
  const images = ['/images/works/badapple_thumbnail_large.png']
  const alt = ['Thumbnail']

  return (
    <Layout title="Bad Apple!!">
      <Container>
        <Title parent={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}>
          Bad Apple!!
          <Badge ml={3}>
            {t({
              id: 'Works.Web.BadApple.Lifespan',
              defaultMessage: 'Undefined'
            })}
          </Badge>
        </Title>
        <Paragraph>
          {t({
            id: 'Works.Web.BadApple.Description',
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
              href="https://portfolio.haz3l.duckdns.org/prototype/BadApple/"
            >
              Prototype/BadApple
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
            <span>aalib.js 2.0, Bad Apple!! ＰＶ</span>
          </ListItem>
        </List>

        <WorkImage images={images} alt={alt} />
      </Container>
    </Layout>
  )
}

export default Work
