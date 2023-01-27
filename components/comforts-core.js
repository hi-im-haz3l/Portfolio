import { HStack, useColorModeValue } from '@chakra-ui/react'
import { BsLightningChargeFill } from 'react-icons/bs'
import { GiCubes } from 'react-icons/gi'
import { RiReactjsLine } from 'react-icons/ri'
import {
  SiNextdotjs,
  SiBootstrap,
  SiMongodb,
  SiDocker,
  SiArduino,
  SiEspressif,
  SiC,
  SiPopos,
  SiNginx,
  SiMariadb,
  SiBlender,
  SiAutodesk,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiOpencv,
  SiPython
} from 'react-icons/si'
import { IconBadge } from './icon-badge'
import { useIntl } from 'react-intl'

const Technologies = ({ children }) => (
  <HStack
    minW={[200, 150, 200]}
    justifyContent={['flex-start', 'flex-end', 'flex-start']}
    pt={[2, 0, 2]}
  >
    {children}
  </HStack>
)

const ComfortsCore = () => {
  const { formatMessage: t } = useIntl()
  return [
    {
      title: t({
        id: 'Home.Comfortable.Content.Web',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<SiNextdotjs />}
            color={useColorModeValue('#000', undefined)}
            bg={useColorModeValue(undefined, '#000')}
            tooltip="Next.js"
          />
          <IconBadge
            icon={<SiMongodb />}
            color={useColorModeValue('#e7b218', '#f2c22c')}
            bg={useColorModeValue(undefined, '#313134')}
            borderColor={useColorModeValue('#e7b218', undefined)}
            tooltip="Firebase / MongoDB"
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
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.Linux',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<SiMariadb />}
            color={useColorModeValue('#0078a5', undefined)}
            bg={useColorModeValue(undefined, '#013143')}
            borderColor={useColorModeValue('#0078a5', undefined)}
            tooltip="MariaDB"
          />
          <IconBadge
            icon={<SiDocker />}
            color={useColorModeValue('#1c75bb', undefined)}
            bg={useColorModeValue(undefined, '#005fa9')}
            borderColor={useColorModeValue('#1c75bb', undefined)}
            tooltip="Docker"
          />
          <IconBadge
            icon={<SiPopos />}
            color={useColorModeValue('#3e9ba7', undefined)}
            bg={useColorModeValue(undefined, '#40b1bf')}
            borderColor={useColorModeValue('#3e9ba7', undefined)}
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
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.Embedded',
        defaultMessage: 'Undefined'
      }),
      icons: (
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
            color={useColorModeValue('#0072cd', undefined)}
            bg={useColorModeValue(undefined, '#00589d')}
            borderColor={useColorModeValue('#0072cd', undefined)}
            tooltip={`C (
              ${t({
                id: 'Home.Comfortable.Content.Embedded.C',
                defaultMessage: 'Undefined'
              })})`}
          />
          <IconBadge
            icon={<SiArduino />}
            color={useColorModeValue('#00979d', undefined)}
            bg={useColorModeValue(undefined, '#00979d')}
            borderColor={useColorModeValue('#00979d', undefined)}
            tooltip="Arduino"
          />
        </Technologies>
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.3D',
        defaultMessage: 'Undefined'
      }),
      icons: (
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
            color={useColorModeValue('#6f6f9b', undefined)}
            bg={useColorModeValue(undefined, '#4b4b9b')}
            borderColor={useColorModeValue('#6f6f9b', undefined)}
            tooltip="MagicaVoxel"
          />
        </Technologies>
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.Vision',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<SiOpencv />}
            color={useColorModeValue('#727285', undefined)}
            bg={useColorModeValue(undefined, '#313134')}
            borderColor={useColorModeValue('#727285', undefined)}
            tooltip="OpenCV"
          />
          <IconBadge
            icon={<SiPython />}
            color={useColorModeValue('#064e87', undefined)}
            bg={useColorModeValue(undefined, '#0e5e99')}
            borderColor={useColorModeValue('#064e87', undefined)}
            tooltip="Python"
          />
        </Technologies>
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.Images',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<SiAdobeillustrator />}
            color={useColorModeValue('#974300', '#300000')}
            bg={useColorModeValue(undefined, '#df9713')}
            borderColor={useColorModeValue('#d58101', '#7e5200')}
            tooltip="Adobe Illustrator"
          />
          <IconBadge
            icon={<SiAdobephotoshop />}
            color={useColorModeValue('#00617c', '#00242e')}
            bg={useColorModeValue(undefined, '#01afd3')}
            borderColor={useColorModeValue('#01afd3', '#006276')}
            tooltip="Adobe Photoshop"
          />
        </Technologies>
      )
    }
  ]
}

export default ComfortsCore
