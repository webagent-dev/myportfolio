import React from 'react'
import styled from 'styled-components'
import { Header, Cta, Footer, Mainabout, What, Type, Skill } from '../one'
import { Flip } from 'react-reveal';
const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
overflow-y: scroll;
`
function About() {
  return (
<Flip bottom>
    <AboutContainer>
      <Header />
      <Mainabout />
      <Type text='skills' />
      <What />
         <Type  text='Technologies'/>
         <Skill />
      <Cta />
      <Footer />
    </AboutContainer>
    </Flip>
  )
}

export default About