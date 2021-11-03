import React, { useEffect } from 'react'
import { Box, Code as ChakraCode } from '@chakra-ui/react'
import Prism from 'prismjs'

import 'prismjs/components/prism-haskell'
import 'prismjs/components/prism-idris'

interface Props {
  children: string
  className: string
  width?: string
  my?: number
}

const Code = ({ className, children, width, my = 10 }: Props) => {
  useEffect(() => Prism.highlightAll(), [])
  return (
    <Box flexGrow={1} width="100%" w={width ? width : ''}>
      <pre>
        <ChakraCode
          border="1px solid grey"
          boxShadow="none"
          width="100%"
          p={5}
          className={className}
        >
          {children}
        </ChakraCode>
      </pre>
    </Box>
  )
}

export default Code
