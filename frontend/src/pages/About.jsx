import React from 'react'
import styled from 'styled-components'
import { Header, Cta, Footer, Mainabout, What, Type, Skill } from '../one'
const AboutContainer = styled.div``
function About() {
  return (
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
  )
}

export default About