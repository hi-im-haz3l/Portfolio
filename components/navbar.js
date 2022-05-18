import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
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
import WidthLowerThan from './width-query'

const NavBarItem = ({ href, path, children, ...props }) => {
  const active = path === href
  const activeColor = useColorModeValue('#385898', 'teal.200')
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
      <Link
        p=".5rem .75rem"
        borderRadius="lg"
        fontWeight="semibold"
        color={active ? activeColor : inactiveColor}
        css={
          active && {
            textDecoration: 'underline',
            textDecorationThickness: '2px'
          }
        }
        _hover={{ bg: useColorModeValue('#d1d1d195', '#71717488') }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const SideBarItem = ({ href, path, children, ...props }) => {
  const active = path === href
  const activeColor = useColorModeValue('#385898', 'teal.200')
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
      <Link variant="no_underline" {...props}>
        <MenuItem
          fontWeight="semibold"
          color={active ? activeColor : inactiveColor}
          css={
            active && {
              textDecoration: 'underline',
              textDecorationThickness: '2px'
            }
          }
          _hover={{ bg: useColorModeValue('#edf2f7', '#414144') }}
        >
          {children}
        </MenuItem>
      </Link>
    </NextLink>
  )
}

const Navbar = ({ currentPath, currentLocale }) => {
  const { formatMessage: t } = useIntl()
  const fullSize = WidthLowerThan(48)

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff70', '#44444a80')}
      css={{ backdropFilter: 'blur(.7em)' }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" mr={3}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Box>

        <Stack
          direction="row"
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          flexGrow={1}
        >
          <NavBarItem href="/works" path={currentPath}>
            {t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}
          </NavBarItem>
          <NavBarItem
            variant="align_icon"
            target="_blank"
            href="https://github.com/hi-im-haz3l/portfolio"
            path={currentPath}
            style={{ gap: 4 }}
          >
            <IoLogoGithub />
            {t({ id: 'Navbar.Source', defaultMessage: 'Undefined' })}
          </NavBarItem>
          <Box
            ml="auto !important"
            bg={useColorModeValue('#d1d1d195', '#71717488')}
            borderRadius="xl"
          >
            {!fullSize && <LocalesSelector currentLocale={currentLocale} />}
          </Box>
        </Stack>

        <Box ml={{ base: 0, md: 7 }} align="end">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu" color="blackAlpha.500">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius="lg"
                borderWidth="2px"
                borderColor={useColorModeValue(
                  'blackAlpha.50',
                  'whiteAlpha.200'
                )}
              />
              <MenuList
                border="none"
                bg={useColorModeValue('#f5f5f5', '#313134')}
              >
                <SideBarItem href="/" path={currentPath}>
                  {t({ id: 'Sidebar.About', defaultMessage: 'Undefined' })}
                </SideBarItem>
                <SideBarItem href="/works" path={currentPath}>
                  {t({ id: 'Sidebar.Works', defaultMessage: 'Undefined' })}
                </SideBarItem>
                <SideBarItem
                  target="_blank"
                  href="https://github.com/hi-im-haz3l/portfolio"
                  path={currentPath}
                >
                  {t({ id: 'Sidebar.Source', defaultMessage: 'Undefined' })}
                </SideBarItem>
                <MenuDivider color={useColorModeValue('#d9dfe7', '#535357')} />
                <MenuItem closeOnSelect={false}>
                  <Box m="0 auto !important">
                    {fullSize && (
                      <LocalesSelector currentLocale={currentLocale} />
                    )}
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
