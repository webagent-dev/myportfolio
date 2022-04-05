import React from 'react'
import styled from 'styled-components'
import { Header, Footer, Slider, Cta, Contacts } from '../one'
import {  Bounce } from 'react-reveal'

const ContactContainer = styled.div`
    width: 100vw;
    height: 100vh;
 overflow-y: scroll;
`
function Contact() {
  return (
    <Bounce>
    <ContactContainer>
    <Header />
    <Contacts />
    <Cta />
    <Footer />
    </ContactContainer>
    </Bounce>
  )
}

export default Contact