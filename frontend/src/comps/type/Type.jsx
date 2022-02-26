import React from 'react'
import { Container, Text } from './type.style'
function Type({text}) {
  return (
    <Container>
      { 
      text &&  <Text>{text} </Text>
      }
    </Container>
  )
}

export default Type