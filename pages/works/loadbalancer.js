import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { CustomBadge } from '../../components/icon-badge'
import { useIntl } from 'react-intl'

const Work = () => {
  const { formatMessage: t } = useIntl()
  const images = ['/images/works/loadbalancer_thumbnail_large.png']
  const alt = ['Full diagram']

  return (
    <Layout title="Load Balancer">
      <Container>
        <Title parent={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}>
          Load Balancer
          <Badge ml={3}>
            {t({
              id: 'Works.Embedded.LoadBalancer.Lifespan',
              defaultMessage: 'Undefined'
            })}
          </Badge>
        </Title>
        <Paragraph>
          {t({
            id: 'Works.Embedded.LoadBalancer.Description',
            defaultMessage: 'Undefined'
          })}
        </Paragraph>
        <List ml={4} my={4}>
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
            Esp8266 3.0.2, NodeMCU (ESP-12)
          </ListItem>
        </List>

        <WorkImage images={images} alt={alt} />
      </Container>
    </Layout>
  )
}

export default Work
