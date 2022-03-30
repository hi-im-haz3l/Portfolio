import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import LocalesSelector from './locales-selector'
import { useIntl } from 'react-intl'

const NavBarItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const activeColor = useColorModeValue('#385898', 'teal.200')
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        pl={3}
        pr={3}
        borderRadius={7}
        fontWeight='semibold'
        color={active ? activeColor : inactiveColor}
        css={active ? { textDecoration: 'underline', textDecorationThickness: '2px' } : undefined}
        target={target}
        _hover={{ bg: useColorModeValue('#d1d1d195', '#71717488') }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const SideBarItem = ({ href, path, children }) => {
  const active = path === href
  const activeColor = useColorModeValue('#385898', 'teal.200')
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
        <MenuItem _hover={{ bg: useColorModeValue('#edf2f7', '#414144') }}>
          <Link
            variant="no-underline"
            fontWeight='semibold'
            color={active ? activeColor : inactiveColor}
            css={active ? { textDecoration: 'underline', textDecorationThickness: '2px' } : undefined}
          >
            {children}
          </Link>
        </MenuItem>
    </NextLink>
  )
}

const Navbar = props => {
  const { formatMessage: t } = useIntl()
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff70', '#44444a80')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={3}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavBarItem href="/works" path={path}>
            {t({id: 'Navbar.Works', defaultMessage: 'Undefined'})}
          </NavBarItem>
          <NavBarItem
            target="_blank"
            href="https://github.com/hi-im-haz3l/portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
          >
            <IoLogoGithub />
            {t({id: 'Navbar.Source', defaultMessage: 'Undefined'})}
          </NavBarItem>
          <Box
            ml='auto !important'
            bg={useColorModeValue('#d1d1d195', '#71717488')}
            borderRadius='xl'
          >
            <LocalesSelector />
          </Box>
        </Stack>

        <Box ml={7} align="end">
          <ThemeToggleButton />

          <Box 
            ml={2} 
            display={{ base: 'inline-block', md: 'none' }} 
          >
            <Menu 
              isLazy 
              id="navbar-menu"
              color='blackAlpha.500'
            >
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={useColorModeValue('#f5f5f5', '#313134')}>
                <SideBarItem href="/" path={path}>
                  {t({id: 'Sidebar.About', defaultMessage: 'Undefined'})}
                </SideBarItem>
                <SideBarItem href="/works" path={path}>
                  {t({id: 'Sidebar.Works', defaultMessage: 'Undefined'})}
                </SideBarItem>
                <SideBarItem href="https://github.com/hi-im-haz3l/portfolio" path={path}>
                  {t({id: 'Sidebar.Source', defaultMessage: 'Undefined'})}
                </SideBarItem>
                <MenuDivider />
                
                <MenuItem closeOnSelect={false}>
                  <Box m='0 auto !important'>
                    <LocalesSelector />
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar