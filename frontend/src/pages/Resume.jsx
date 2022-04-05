import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header, Footer, Cta, Resumes, Note } from  '../one'
import { Reveal,Flip } from 'react-reveal'
const ResumeContainer = styled.div`
width: 100%;
height: 100%;
  position: relative;

`
const Dawnload = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  background: skyblue;
  border: 1px solid white;
  color: white;
  font-weight: 800;
  font-family: 'Mukta', sans-serif;
`
const Link = styled.a`
     position: fixed;
  top: 150px;
  right: 50px;
  z-index: 1;

  @media(max-width: 780px){
    position: absolute;
    top: 90px;
    right: 40%;
  }
  @media(max-width: 780px){
    position: absolute;
    top: 20px;
    right: 30%;
  }
`
function Resume() {
  const [note, setNote ] = useState(true)

  useEffect(() => {
   const getNote = setTimeout(() => {
    setNote(false)
return clearTimeout(getNote)
}, 5000)
  },[])
  return (
    <Reveal>
    <ResumeContainer>
        <Header />
        { note && <Note />}
         <Resumes />
        <Cta />
        <Footer />
        
        <Link href='#' alt='Resume'>
          <Flip right>
        <Dawnload>Download Resume</Dawnload>
        </Flip>
        </Link>
    </ResumeContainer>
    </Reveal>
  )
}

export default Resume