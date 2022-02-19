import React, { } from 'react';
import styled from 'styled-components'
// import { ThemeContext } from '../context/ThemeContext'
import { Header,Slider, Desc} from '../one'

const Wrapper = styled.div``
function Container() {

  
  return (
  <Wrapper>
    <Header />
    <Slider />
    <Desc />
  </Wrapper>
  )
}

export default Container;
