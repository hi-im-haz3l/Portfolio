import Head from 'next/head'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { HrefGridItem } from '../components/grid-item'
import { useIntl } from 'react-intl'
import { useState } from 'react'
import lockScroll from 'react-lock-scroll'
import { AnimatePresence } from 'framer-motion'
import { Boilerplate, CondensedBoilerplate } from '../components/work-detail'

import details from '../data/works-detail.json'
import thumbAmbersBakery from '../public/images/works/ambersbakery_thumbnail.png'
import thumbStickynote from '../public/images/works/stickynote_thumbnail.png'
import thumbCronus from '../public/images/works/cronus_thumbnail.png'
import thumbKhanhsPortfolio from '../public/placeholder.png'
import thumbBadApple from '../public/images/works/badapple_thumbnail.png'
import thumbLoadBalancer from '../public/images/works/loadbalancer_thumbnail.png'
import thumbProjectMikkeli from '../public/images/works/projectmikkeli_thumbnail.png'

const Works = () => {
  const { formatMessage: t } = useIntl()
  const [isOpen, setState] = useState(false)
  lockScroll(isOpen)

  return (
    <Layout title={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}>
      <Container maxW="container.sm">
        <Heading as="h3" fontSize={20} mb={6}>
          {t({ id: 'Works.Web.Title', defaultMessage: 'Undefined' })}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} m={-3} spacing={2}>
          <Section mb={2}>
            <CondensedBoilerplate
              title="Amber's Bakery"
              id="AmbersBakery"
              category="Web"
              thumbnail={thumbAmbersBakery}
              setOpen={setState}
            />
          </Section>

          <Section mb={2}>
            <CondensedBoilerplate
              title="Sticky Note"
              id="Stickynote"
              category="Web"
              thumbnail={thumbStickynote}
              setOpen={setState}
            />
          </Section>

          <Section mb={3} delay={0.1}>
            <CondensedBoilerplate
              title="Cronus"
              id="Cronus"
              category="Web"
              thumbnail={thumbCronus}
              setOpen={setState}
            />
          </Section>

          <Section mb={2} delay={0.1}>
            <CondensedBoilerplate
              title="Kh??nh's Portfolio"
              id="KhanhsPortfolio"
              category="Web"
              thumbnail={thumbKhanhsPortfolio}
              setOpen={setState}
            />
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({
              id: 'Works.Embedded',
              defaultMessage: 'Undefined'
            })}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section mb={3} delay={0.3}>
            <CondensedBoilerplate
              title="Load Balancer"
              id="LoadBalancer"
              category="Embedded"
              thumbnail={thumbLoadBalancer}
              setOpen={setState}
            />
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({ id: 'Works.Hobbies', defaultMessage: 'Undefined' })}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section mb={3} delay={0.4}>
            <HrefGridItem
              title="Project Mikkeli"
              thumbnail={thumbProjectMikkeli}
              href="https://www.youtube.com/watch?v=MPBXjJQDMdA"
              lifespan={t({
                id: 'Works.Hobbies.ProjectMikkeli.Lifespan',
                defaultMessage: 'Undefined'
              })}
            >
              {t({
                id: 'Works.Hobbies.ProjectMikkeli.Description',
                defaultMessage: 'Undefined'
              })}
            </HrefGridItem>
          </Section>

          <Section mb={2} delay={0.4}>
            <CondensedBoilerplate
              title="Bad Apple!!"
              id="BadApple"
              category="Hobbies"
              thumbnail={thumbBadApple}
              setOpen={setState}
            />
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({ id: 'Works.Experimental', defaultMessage: 'Undefined' })}
          </Heading>
        </Section>

        <AnimatePresence>
          {isOpen && (
            <>
              <Head>
                <title>{isOpen.title} - Kh??nh&#x27;s Portfolio</title>
              </Head>
              <Boilerplate
                title={isOpen.title}
                id={isOpen.id}
                category={isOpen.category}
                thumbnail={isOpen.thumbnail}
                setOpen={setState}
                details={details[isOpen.id]}
              />
            </>
          )}
        </AnimatePresence>
      </Container>
    </Layout>
  )
}

export default Works
