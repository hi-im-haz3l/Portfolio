import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, WorkGridItem } from '../components/grid-item'
import { useIntl } from 'react-intl'

import thumbAmbersBakery from '../public/images/works/ambersbakery_thumbnail.png'
import thumbStickynote from '../public/images/works/stickynote_thumbnail.png'
import thumbCronus from '../public/images/works/cronus_thumbnail.png'
import thumbKhanhsPortfolio from '../public/placeholder.png'
import thumbBadApple from '../public/images/works/badapple_thumbnail.png'
import thumbLoadBalancer from '../public/images/works/loadbalancer_thumbnail.png'
import thumbProjectMikkeli from '../public/images/works/projectmikkeli_thumbnail.png'

const Works = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Layout title={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}>
      <Container maxW="container.sm">
        <Heading as="h3" fontSize={20} mb={6}>
          {t({ id: 'Works.Web.Title', defaultMessage: 'Undefined' })}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} m={-3} spacing={2}>
          <Section mb={2}>
            <WorkGridItem
              id="ambersbakery"
              title="Amber's Bakery"
              thumbnail={thumbAmbersBakery}
            >
              {t({
                id: 'Works.Web.AmbersBakery.Description',
                defaultMessage: 'Undefined'
              })}
            </WorkGridItem>
          </Section>

          <Section mb={2}>
            <WorkGridItem
              id="stickynote"
              title="Sticky Note"
              thumbnail={thumbStickynote}
            >
              {t({
                id: 'Works.Web.Stickynote.Description',
                defaultMessage: 'Undefined'
              })}
            </WorkGridItem>
          </Section>

          <Section mb={3} delay={0.1}>
            <WorkGridItem id="cronus" title="Cronus" thumbnail={thumbCronus}>
              {t({
                id: 'Works.Web.Cronus.Description',
                defaultMessage: 'Undefined'
              })}
            </WorkGridItem>
          </Section>

          <Section mb={2} delay={0.1}>
            <WorkGridItem
              id="khanhsportfolio"
              title="Khánh's Portfolio"
              thumbnail={thumbKhanhsPortfolio}
            >
              {t({
                id: 'Works.Web.KhanhsPortfolio.Description',
                defaultMessage: 'Undefined'
              })}
            </WorkGridItem>
          </Section>

          <Section mb={2} delay={0.2}>
            <WorkGridItem
              id="badapple"
              title="Bad Apple!!"
              thumbnail={thumbBadApple}
            >
              {t({
                id: 'Works.Web.BadApple.Description',
                defaultMessage: 'Undefined'
              })}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({ id: 'Home.Comfortable.Content.Embedded', defaultMessage: 'Undefined' })}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section mb={3} delay={0.3}>
            <WorkGridItem
              id="loadbalancer"
              title="Load Balancer"
              thumbnail={thumbLoadBalancer}
            >
              {t({
                id: 'Works.Embedded.LoadBalancer.Description',
                defaultMessage: 'Undefined'
              })}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({ id: 'Works.Assignment', defaultMessage: 'Undefined' })}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section mb={3} delay={0.4}>
            <GridItem
              title="Project Mikkeli"
              thumbnail={thumbProjectMikkeli}
              href="https://www.youtube.com/watch?v=MPBXjJQDMdA"
            >
              {t({
                id: 'Works.Assignment.ProjectMikkeli.Description',
                defaultMessage: 'Undefined'
              })}
            </GridItem>
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({ id: 'Works.Experimental', defaultMessage: 'Undefined' })}
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
