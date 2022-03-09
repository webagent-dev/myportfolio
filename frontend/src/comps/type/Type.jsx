import React from 'react'
import { Container, Text } from './type.style'
function Type({ head, text}) {
  return (
    <Container>
      { 
      text &&  <Text>{text} </Text>
      }
    </Container>
  )
}

export default Type