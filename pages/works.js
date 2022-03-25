import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { useIntl } from 'react-intl'

import thumbAmbersbakery from '../public/images/works/ambersbakery_thumbnail.png'
import thumbStickynote from '../public/images/works/stickynote_thumbnail.png'

const Works = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t({id: 'Works.Title', defaultMessage: 'Undefined'})}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="ambersbakery"
              title={t({id: 'Works.Product.Ambersbakery.Title', defaultMessage: 'Undefined'})}
              thumbnail={thumbAmbersbakery}
            >
              {t({id: 'Works.Product.Ambersbakery.Description', defaultMessage: 'Undefined'})}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="stickynote"
              title={t({id: 'Works.Product.Stickynote.Title', defaultMessage: 'Undefined'})}
              thumbnail={thumbStickynote}
            >
              {t({id: 'Works.Product.Stickynote.Description', defaultMessage: 'Undefined'})}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.1}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({id: 'Works.Experimental', defaultMessage: 'Undefined'})}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="3dprintermonitor"
              title={t({id: 'Works.Product.3Dprintermonitor.Title', defaultMessage: 'Undefined'})}
              thumbnail=''
            >
              {t({id: 'Works.Product.3Dprintermonitor.Description', defaultMessage: 'Undefined'})}
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="bluetoohdoor"
              title={t({id: 'Works.Product.Bluetoohdoor.Title', defaultMessage: 'Undefined'})}
              thumbnail=''
            >
              {t({id: 'Works.Product.Bluetoohdoor.Description', defaultMessage: 'Undefined'})}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
