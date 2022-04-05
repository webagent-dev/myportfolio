import React, {useState } from 'react'
import styled from 'styled-components'
import {Header, Cta, Footer, Projects} from '../one'
import { Fade} from 'react-reveal'

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`
function Project() { 
  return (
    <Fade>
    <ProjectContainer>
<Header />
<Cta />
<Projects  />
<Footer />
        </ProjectContainer>
        </Fade>
  )
}

export default Project