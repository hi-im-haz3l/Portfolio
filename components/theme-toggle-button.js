import { AnimatePresence, motion } from 'framer-motion'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { RiPantoneLine } from 'react-icons/ri'

const ThemeToggleButton = ({ ariaLabel }) => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Box
          p={2}
          h="2.5em"
          w="2.5em"
          as="button"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="lg"
          boxShadow="lg"
          aria-label={ariaLabel}
          bg={useColorModeValue('#805ad5', '#fbd38d')}
          color={useColorModeValue('white', 'black')}
          onClick={toggleColorMode}
          _hover={{
            '&>span': {
              transform: 'translateX(-.2em) translateY(.25em)',
              opacity: '1'
            },
            '&>div': {
              transform: 'translateX(.7em) translateY(-.8em)',
              fontSize: '10'
            }
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            transition="350ms"
          >
            {useColorModeValue(<MoonIcon />, <SunIcon />)}
          </Box>
          <Box
            as="span"
            position="absolute"
            transform="translateX(-1em) translateY(.25em)"
            opacity="0"
            transition="350ms"
            fontSize={18}
          >
            <RiPantoneLine />
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
