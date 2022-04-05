import React from 'react'
import styled from 'styled-components'
import { Header, Footer, Single, Comment } from '../one'
import {  Bounce } from 'react-reveal'
 const SingleContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
 `
function SingleProject() {
  return (
    <Bounce>
    <SingleContainer>
        <Header />
        <Single />
        <Comment />
        <Footer />
    </SingleContainer>
    </Bounce>
  )
}

export default SingleProject