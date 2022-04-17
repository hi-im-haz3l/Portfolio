import { useState } from 'react'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

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

const swipeConfidenceThreshold = 10000

const HScroll = ({ display, tabs }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const track = useColorModeValue("#525252", "#ededee")

  return (
    <Box display={display}>
      <AnimateSharedLayout>
        <Box w="59px" mt="-1.7em" ml="auto" pb={6}>
          <Flex mt={2} justifyContent="space-between" position="relative">
            {tabs.map((e, i) => {
              const isActive = i === page
              return (
                <Box key={i} w="100%">
                  {isActive && (
                    <Box
                      as={motion.div}
                      w="100%"
                      h="0.25em"
                      borderRadius="full"
                      bg={track}
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
              h="0.25em"
              borderRadius="full"
              bg={useColorModeValue("#d3d3d3", "#525252")}
              position="absolute"
            />
          </Flex>
        </Box>
        <Box h="18.4em" overflow="hidden" position="relative">
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

                  if (swipe < -swipeConfidenceThreshold) {
                    if (page < 1) setPage([page + 1, 1])
                  } else if (swipe > swipeConfidenceThreshold) {
                    if (page > 0) setPage([page - 1, -1])
                  }
                }}
              >
                {tabs[page]}
              </motion.section>
            </Box>
          </AnimatePresence>
        </Box>
      </AnimateSharedLayout>
    </Box>
  )
}

export default HScroll
