import { Heading, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ parent, onClick, children }) => (
  <>
    <Link onClick={() => onClick(false)}>{parent}</Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={2}>
      {children}
    </Heading>
  </>
)

export const CondensedTitle = ({ children }) => (
  <>
    <Heading display="inline-block" as="h3" fontSize={18} my={2}>
      {children}
    </Heading>
  </>
)
