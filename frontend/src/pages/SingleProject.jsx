import React from 'react'
import styled from 'styled-components'
import { Header, Footer, Single, Comment } from '../one'
export const SingleContainer = styled.div``
function SingleProject() {
  return (
    <SingleContainer>
        <Header />
        <Single />
        <Comment />
        <Footer />
    </SingleContainer>
  )
}

export default SingleProject