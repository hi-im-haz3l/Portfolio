import {
  Flex,
  Box,
  SimpleGrid,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import { IconBadge } from './icon-badge'
BsLightningChargeFill
import { BsLightningChargeFill } from 'react-icons/bs'
import { GiCubes } from 'react-icons/gi'
import { RiReactjsLine } from 'react-icons/ri'
import {
  SiNextdotjs,
  SiBootstrap,
  SiPhp,
  SiArduino,
  SiEspressif,
  SiC,
  SiPopos,
  SiNginx,
  SiGnubash,
  SiMariadb,
  SiBlender,
  SiAutodesk,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiOpencv,
  SiPython
} from 'react-icons/si'
import { useIntl } from 'react-intl'

const Comfort = ({ children, ...props }) => (
  <Flex
    p=".75rem 1rem"
    maxW={[300, 'unset']}
    m={['0 auto', 0]}
    borderRadius="xl"
    bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.300')}
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    fontSize={16}
    fontWeight="semibold"
    {...props}
  >
    {children}
  </Flex>
)

const Heading = ({ children }) => <Box w={[200, 150, 200]}>{children}</Box>

const Technologies = ({ children }) => (
  <HStack
    w={[200, 150, 200]}
    justifyContent={['flex-start', 'flex-end', 'flex-start']}
    pt={[2, 0, 2]}
  >
    {children}
  </HStack>
)

const Comforts = () => {
  const { formatMessage: t } = useIntl()
  const CTooltip =
    'C (' +
    t({
      id: 'Home.Comfortable.Content.Embedded.C',
      defaultMessage: 'Undefined'
    }) +
    ')'

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={3}>
      <Comfort>
        <Heading>
          {t({
            id: 'Home.Comfortable.Content.Web',
            defaultMessage: 'Undefined'
          })}
        </Heading>
        <Technologies>
          <IconBadge
            icon={<SiNextdotjs />}
            color={useColorModeValue('#000', undefined)}
            bg={useColorModeValue(undefined, '#000')}
            tooltip="Next.js"
          />
          <IconBadge
            icon={<SiPhp />}
            color={useColorModeValue('#4b568b', undefined)}
            bg={useColorModeValue(undefined, '#5d6aab')}
            borderColor={useColorModeValue('#4b568b', undefined)}
            tooltip="PHP"
          />
          <IconBadge
            icon={<SiBootstrap />}
            color={useColorModeValue('#8f62d2', undefined)}
            bg={useColorModeValue(undefined, '#7e4eca')}
            borderColor={useColorModeValue('#8f62d2', undefined)}
            tooltip="Bootstrap"
          />
          <IconBadge
            icon={<RiReactjsLine />}
            color={useColorModeValue('#00c2e5', undefined)}
            bg={useColorModeValue(undefined, '#00aec5')}
            borderColor={useColorModeValue('#00c2e5', '#007989')}
            tooltip="React"
          />
          <IconBadge
            icon={<BsLightningChargeFill />}
            color={useColorModeValue('#4cc8c3', undefined)}
            bg={useColorModeValue(undefined, '#5bc0c1')}
            borderColor={useColorModeValue('#4cc8c3', '#408889')}
            tooltip="Chakra UI"
          />
        </Technologies>
      </Comfort>
      <Comfort>
        <Heading>
          {t({
            id: 'Home.Comfortable.Content.Linux',
            defaultMessage: 'Undefined'
          })}
        </Heading>
        <Technologies>
          <IconBadge
            icon={<SiGnubash />}
            color={useColorModeValue('#313134', undefined)}
            bg={useColorModeValue(undefined, '#313134')}
            borderColor={useColorModeValue('#013143', undefined)}
            tooltip="Powerlevel10k"
          />
          <IconBadge
            icon={<SiMariadb />}
            color={useColorModeValue('#013143', undefined)}
            bg={useColorModeValue(undefined, '#013143')}
            borderColor={useColorModeValue('#013143', undefined)}
            tooltip="MariaDB"
          />
          <IconBadge
            icon={<SiPopos />}
            color={useColorModeValue('#2c7078', undefined)}
            bg={useColorModeValue(undefined, '#368b95')}
            borderColor={useColorModeValue('#2c7078', undefined)}
            tooltip="Pop!_OS"
          />
          <IconBadge
            icon={<SiNginx />}
            color={useColorModeValue('#0c8f49', undefined)}
            bg={useColorModeValue(undefined, '#097039')}
            borderColor={useColorModeValue('#097039', undefined)}
            tooltip="Nginx"
          />
        </Technologies>
      </Comfort>
      <Comfort>
        <Heading>
          {t({
            id: 'Home.Comfortable.Content.Embedded',
            defaultMessage: 'Undefined'
          })}
        </Heading>
        <Technologies>
          <IconBadge
            icon={<SiEspressif />}
            color={useColorModeValue('#cd292c', undefined)}
            bg={useColorModeValue(undefined, '#ae1614')}
            borderColor={useColorModeValue('#cd292c', undefined)}
            tooltip="ESP-IDF"
          />
          <IconBadge
            icon={<SiC />}
            color={useColorModeValue('#014b95', undefined)}
            bg={useColorModeValue(undefined, '#00589d')}
            borderColor={useColorModeValue('#014b95', undefined)}
            tooltip={CTooltip}
          />
          <IconBadge
            icon={<SiArduino />}
            color={useColorModeValue('#008184', undefined)}
            bg={useColorModeValue(undefined, '#00979d')}
            borderColor={useColorModeValue('#008184', undefined)}
            tooltip="Arduino"
          />
        </Technologies>
      </Comfort>
      <Comfort>
        <Heading>
          {t({
            id: 'Home.Comfortable.Content.3D',
            defaultMessage: 'Undefined'
          })}
        </Heading>
        <Technologies>
          <IconBadge
            icon={<SiBlender />}
            color={useColorModeValue('#e17910', undefined)}
            bg={useColorModeValue(undefined, '#ef6302')}
            borderColor={useColorModeValue('#e17910', '#933d00')}
            tooltip="Blender"
          />
          <IconBadge
            icon={<SiAutodesk />}
            color={useColorModeValue('#d38901', undefined)}
            bg={useColorModeValue(undefined, '#e19200')}
            borderColor={useColorModeValue('#d38901', '#7e5200')}
            tooltip="Fusion 360"
          />
          <IconBadge
            icon={<GiCubes />}
            color={useColorModeValue('#3b3b7a', undefined)}
            bg={useColorModeValue(undefined, '#4b4b9b')}
            borderColor={useColorModeValue('#3b3b7a', undefined)}
            tooltip="MagicaVoxel"
          />
        </Technologies>
      </Comfort>
      <Comfort>
        <Heading>
          {t({
            id: 'Home.Comfortable.Content.Vision',
            defaultMessage: 'Undefined'
          })}
        </Heading>
        <Technologies>
          <IconBadge
            icon={<SiOpencv />}
            color={useColorModeValue('#013143', undefined)}
            bg={useColorModeValue(undefined, '#313134')}
            borderColor={useColorModeValue('#013143', undefined)}
            tooltip="OpenCV"
          />
          <IconBadge
            icon={<SiPython />}
            color={useColorModeValue('#014b95', undefined)}
            bg={useColorModeValue(undefined, '#0e5e99')}
            borderColor={useColorModeValue('#014b95', undefined)}
            tooltip="Python"
          />
        </Technologies>
      </Comfort>
      <Comfort>
        <Heading>
          {t({
            id: 'Home.Comfortable.Content.Images',
            defaultMessage: 'Undefined'
          })}
        </Heading>
        <Technologies>
          <IconBadge
            icon={<SiAdobeillustrator />}
            color={useColorModeValue('#833a00', '#300000')}
            bg={useColorModeValue(undefined, '#df9713')}
            borderColor={useColorModeValue('#d58101', '#7e5200')}
            tooltip="Adobe Illustrator"
          />
          <IconBadge
            icon={<SiAdobephotoshop />}
            color={useColorModeValue('#00566e', '#00242e')}
            bg={useColorModeValue(undefined, '#01afd3')}
            borderColor={useColorModeValue('#01afd3', '#006276')}
            tooltip="Adobe Photoshop"
          />
        </Technologies>
      </Comfort>
    </SimpleGrid>
  )
}

export default Comforts
