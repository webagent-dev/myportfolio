import React from 'react'
import { Main, Header, Text } from './note.style'
import { Flip } from 'react-reveal'
function Note() {
  return (
    <Flip>
    <Main>
            <Header>this page is not available on mobile screen</Header>
 </Main>
 </Flip>
  )
}

export default Note