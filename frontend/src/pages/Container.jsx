import React, { } from 'react';
import styled from 'styled-components'
// import { ThemeContext } from '../context/ThemeContext'
import { Header,Slider, Desc, Feature, Cta,Footer} from '../one'

const Wrapper = styled.div``
function Container() {

  
  return (
  <>
  <Wrapper>
      <Header />
      <Slider />
      <Desc />
      <Feature />
      <Cta />
      <Footer />
    </Wrapper>
    </>
  )
}

export default Container;
