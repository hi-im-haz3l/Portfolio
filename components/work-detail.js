import { useState } from 'react'
import Image from 'next/image'
import {
  Container,
  Badge,
  Box,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Link,
  Text
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Title, CondensedTitle } from './work'
import { Paragraph } from './paragraph'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
import { CustomBadge } from '../components/icon-badge'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaFileAlt, FaFileSignature } from 'react-icons/fa'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill, RiFullscreenFill } from 'react-icons/ri'
import { SiGithub } from 'react-icons/si'
import ImageViewer from 'react-simple-image-viewer'

export const Boilerplate = ({
  title,
  id,
  category,
  thumbnail,
  setOpen,
  details
}) => {
  const { formatMessage: t } = useIntl()
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const closeImageViewer = () => {
    setIsViewerOpen(false)
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflowX="hidden"
      overflowY="scroll"
      css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      zIndex={2}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{
          pointerEvents: 'auto',
          zIndex: '-1',
          position: 'fixed',
          background: useColorModeValue('#0000003d', '#000000a8'),
          top: '0',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          cursor: 'pointer'
        }}
        onClick={() => setOpen(false)}
      />
      <Container
        as={motion.div}
        mt="10vh"
        bg={useColorModeValue('#fafdff', '#202023')}
        p={0}
        borderRadius="2xl"
        position="relative"
        overflow="hidden"
        layoutId={`card-container-${id}`}
      >
        <Button
          p={1.5}
          m={4}
          h="auto"
          minW="auto"
          top="0"
          right="0"
          position="absolute"
          bg={useColorModeValue('#fff', '#fafdff')}
          color="#202023"
          fontSize={18}
          zIndex={1}
          borderRadius="full"
          boxShadow="rgba(0, 0, 0, 0.24) 0 .25em .5em"
          _active={{}}
          _hover={{ bg: '#cdcdcd' }}
          onClick={() => setOpen(false)}
          aria-label={t({
            id: `ariaLabel.close`,
            defaultMessage: 'Undefined'
          })}
        >
          <SmallCloseIcon />
        </Button>
        <motion.div
          layoutId={`card-image-container-${id}`}
          style={{
            display: 'flex',
            position: 'relative'
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
          />
          <Box
            position="absolute"
            top="100%"
            height="9999px"
            width="100%"
            boxShadow={useColorModeValue(
              '#33333321 0 0 2em',
              '#00000099 0 0 2em'
            )}
          />
        </motion.div>
        <Box p={{ base: '1em', sm: '1.3em', md: '1.5em' }} position="relative">
          <Button
            p={2.5}
            m="-3.7em 1em 0 0"
            h="auto"
            minW="auto"
            top="0"
            right="0"
            position="absolute"
            bg="#000000ba"
            color="#ededee"
            fontSize={12}
            zIndex={1}
            _active={{}}
            _hover={{ bg: '#333333d9' }}
            onClick={() => setIsViewerOpen(true)}
            aria-label={t({
              id: `ariaLabel.explore`,
              defaultMessage: 'Undefined'
            })}
          >
            {details.images.length > 1 ? (
              `+${details.images.length}`
            ) : (
              <RiFullscreenFill />
            )}
          </Button>
          <motion.div layoutId={`title-container-${id}`}>
            <Title
              parent={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}
              onClick={setOpen}
            >
              {title}
              <Badge ml={3}>
                {t({
                  id: `Works.${category}.${id}.Lifespan`,
                  defaultMessage: 'Undefined'
                })}
              </Badge>
            </Title>
          </motion.div>
          <motion.div layoutId={`description-container-${id}`}>
            <Paragraph>
              {t({
                id: `Works.${category}.${id}.Description`,
                defaultMessage: 'Undefined'
              })}
            </Paragraph>
          </motion.div>

          <List as={motion.div} mt={3}>
            {typeof details.demo === 'undefined' || (
              <ListItem>
                <CustomBadge icon={<FaFileAlt />}>
                  {t({ id: 'Works.Badge.Demo', defaultMessage: 'Undefined' })}
                </CustomBadge>
                <Link
                  variant="align_icon"
                  target="_blank"
                  href={details.demo.link}
                >
                  {details.demo.content}
                  <ExternalLinkIcon mx={1} />
                </Link>
              </ListItem>
            )}
            {typeof details.backend === 'undefined' || (
              <ListItem>
                <CustomBadge icon={<FaFileSignature />}>
                  {t({
                    id: 'Works.Badge.Backend',
                    defaultMessage: 'Undefined'
                  })}
                </CustomBadge>
                <Link
                  variant="align_icon"
                  target="_blank"
                  href={details.backend.link}
                >
                  {t({
                    id: 'Works.Management',
                    defaultMessage: 'Undefined'
                  })}
                  <ExternalLinkIcon mx={1} />
                </Link>
              </ListItem>
            )}
            {typeof details.source === 'undefined' || (
              <ListItem>
                <CustomBadge icon={<FaFileSignature />}>
                  {t({
                    id: 'Navbar.Source',
                    defaultMessage: 'Undefined'
                  })}
                </CustomBadge>
                <Link
                  variant="align_icon"
                  target="_blank"
                  href={details.source.link}
                >
                  <SiGithub />
                  <Text ml={1}>{details.source.content}</Text>
                  <ExternalLinkIcon mx={1} />
                </Link>
              </ListItem>
            )}
            <ListItem>
              <CustomBadge icon={<GiPlatform />}>
                {t({
                  id: 'Works.Badge.Platform',
                  defaultMessage: 'Undefined'
                })}
              </CustomBadge>
              <span>
                {t({
                  id: `Works.${category}.Platform.Description`,
                  defaultMessage: 'Undefined'
                })}
              </span>
            </ListItem>
            {typeof details.stack === 'undefined' || (
              <ListItem>
                <CustomBadge icon={<RiCodeSSlashFill />}>
                  {t({
                    id: 'Works.Badge.Stack',
                    defaultMessage: 'Undefined'
                  })}
                </CustomBadge>
                <span>{details.stack}</span>
              </ListItem>
            )}
          </List>
          {isViewerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ position: 'absolute', zIndex: '1' }}
            >
              <ImageViewer
                src={details.images}
                currentIndex={0}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                  backgroundColor: 'rgba(0,0,0,0.75)'
                }}
                closeOnClickOutside={true}
              />
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export const CondensedBoilerplate = ({
  title,
  id,
  category,
  thumbnail,
  setOpen
}) => {
  const { formatMessage: t } = useIntl()

  return (
    <Box
      as={motion.div}
      w="100%"
      maxW={421}
      p={3}
      m="0 auto"
      borderRadius="xl"
      _hover={{ bg: useColorModeValue('#f5f9ffb0', '#323232c4') }}
      layoutId={`card-container-${id}`}
      cursor="pointer"
      textAlign="center"
      onClick={() =>
        setOpen({
          title: title,
          id: id,
          category: category,
          thumbnail: thumbnail
        })
      }
    >
      <motion.div
        layoutId={`card-image-container-${id}`}
        style={{
          display: 'flex',
          borderRadius: '.75em',
          boxShadow: useColorModeValue(
            '#20202363 0 .3em .5em',
            '#00000063 0 .3em 1em'
          )
        }}
      >
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
      </motion.div>
      <>
        <motion.div layoutId={`title-container-${id}`}>
          <CondensedTitle>
            {title}
            <Badge ml={3}>
              {t({
                id: `Works.${category}.${id}.Lifespan`,
                defaultMessage: 'Undefined'
              })}
            </Badge>
          </CondensedTitle>
        </motion.div>
        <motion.div layoutId={`description-container-${id}`}>
          <Paragraph>
            {t({
              id: `Works.${category}.${id}.Description`,
              defaultMessage: 'Undefined'
            })}
          </Paragraph>
        </motion.div>
      </>
    </Box>
  )
}
