import React, { } from 'react';
import styled from 'styled-components'
// import { ThemeContext } from '../context/ThemeContext'
import { Header,Slider, Desc, Feature, Cta,Footer} from '../one'
import { Zoom } from 'react-reveal';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`
function Container() {

  return (
  <>
  <Zoom>
  <Wrapper>
      <Header />
      <Slider />
      <Desc />
      <Feature />
      <Cta />
      <Footer />
    </Wrapper>
    </Zoom>
    </>
  )
}

export default Container;
