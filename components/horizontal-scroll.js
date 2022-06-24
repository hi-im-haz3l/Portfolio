import { useState } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon } from '@chakra-ui/icons'

const variants = {
  enter: function (direction) {
    return {
      x: direction > 0 ? 700 : -700,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: function (direction) {
    return {
      zIndex: 0,
      x: direction < 0 ? 700 : -700,
      opacity: 0
    }
  }
}

const SideIndicator = ({ direction, onClick, children }) => (
  <Box
    position="absolute"
    top={0}
    bottom={0}
    right={direction === 'right' && 0}
    left={direction === 'left' && 0}
  >
    <Box
      position="relative"
      textAlign="right"
      top="50%"
      transform={
        direction === 'right'
          ? 'translateY(-50%)'
          : 'translateY(-50%) rotate(180deg)'
      }
      fontSize={26}
      onClick={onClick}
      cursor="pointer"
      zIndex={1}
      css={{
        '&>div>svg': {
          filter: useColorModeValue(
            'drop-shadow(1px 2px 2px rgb(0, 0, 0, 0.4))',
            'drop-shadow(1px 2px 2px rgb(255, 255, 255, 0.3))'
          )
        }
      }}
    >
      <motion.div
        animate={{
          x: [2, 5, 2]
        }}
        transition={{ ease: 'easeInOut', duration: 2, repeat: Infinity }}
      >
        {children}
      </motion.div>
    </Box>
  </Box>
)

const ConfidenceThreshold = 10000

const HScroll = ({ tabs, PagesIndexes }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const thumb = useColorModeValue('#000', '#fff')

  return (
    <>
      <Box w="3.7em" mt={-7} ml="auto" pb={6}>
        <Box
          display="flex"
          mt={2}
          justifyContent="space-between"
          position="relative"
        >
          {tabs.map((e, i) => {
            const isActive = i === page
            return (
              <Box key={i} w="100%">
                {isActive && (
                  <Box
                    as={motion.div}
                    w="100%"
                    h=".25em"
                    borderRadius="full"
                    bg={thumb}
                    position="relative"
                    zIndex={1}
                    layoutId="underline"
                  />
                )}
              </Box>
            )
          })}
          <Box
            w="100%"
            h=".25em"
            borderRadius="full"
            bg={useColorModeValue('#d1d1d1', '#525252')}
            position="absolute"
          />
        </Box>
      </Box>
      <Box
        h="18.4em"
        w="110%"
        left="-5%"
        mt={2}
        overflow="hidden"
        position="relative"
      >
        <SideIndicator
          direction="right"
          onClick={() => {
            page < PagesIndexes && setPage([page + 1, 1])
          }}
        >
          {page < PagesIndexes && <ChevronRightIcon />}
        </SideIndicator>
        <SideIndicator
          direction="left"
          onClick={() => {
            page > 0 && setPage([page - 1, -1])
          }}
        >
          {page > 0 && <ChevronRightIcon />}
        </SideIndicator>
        <AnimatePresence initial={false} custom={direction}>
          <Box
            w="100%"
            position="absolute"
            left="50%"
            transform="translate(-50%, 0)"
          >
            <motion.section
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 2
                },
                opacity: { duration: 0.5 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x

                if (swipe < -ConfidenceThreshold) {
                  if (page < PagesIndexes) setPage([page + 1, 1])
                } else if (swipe > ConfidenceThreshold) {
                  if (page > 0) setPage([page - 1, -1])
                }
              }}
            >
              {tabs[page]}
            </motion.section>
          </Box>
        </AnimatePresence>
      </Box>
    </>
  )
}

export default HScroll
