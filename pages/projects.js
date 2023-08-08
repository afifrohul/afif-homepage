import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'
import thumbHmif from '../public/images/hmifunej.png'
import thumbIfmerch from '../public/images/ifmerch.png'
import thumbMagma from '../public/images/magmasmasa.png'

const Projects = () => (
  <Layout title="Project">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Project
      </Heading>
      <Paragraph>
        Here are the projects I have already completed individually or as a
        team.
      </Paragraph>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={6}>
          <GridItem
            title="Web company profile of hmifunej and more stuff about hmifunej."
            thumbnail={thumbHmif}
            href="https://hmifunej.id"
          />
          <GridItem
            title="E-commerce of brand hmifunej named IFMERCH."
            thumbnail={thumbIfmerch}
            href="https://ifmerch-hmifunej.id"
          />
          <GridItem
            title="Web profile of magma class High School 1 Jember."
            thumbnail={thumbMagma}
            href="https://magmasmasa.github.io"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
