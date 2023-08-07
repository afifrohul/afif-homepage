import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m 21 years old undergraduate college student👨‍🎓 who has an
        interest in WEB DEVELOPMENT👨‍💻
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Afif Rohul Abrori
          </Heading>
          <p>Backend Developer Enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Paragraph>
          My nickname is Afif, an undergraduate Computer Science student with a
          strong interest in Web Design and Web Development. I have experience
          working with three or more programming languages, which has given me a
          good understanding of coding principles and the ability to learn new
          technologies quickly. I have practical experience creating responsive
          websites, using front-end technologies like HTML, CSS, and JavaScript,
          as well as working with back-end frameworks like Laravel. I keep
          myself updated with the latest industry trends, attending conferences
          and taking online courses to continually expand my knowledge.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Project
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @afifrohul
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @afifrohul
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @afif.rohul
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:afifmemyself22@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Email Me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
