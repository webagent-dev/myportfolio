import React from 'react'
import styled from 'styled-components'
import {Header, Cta, Footer, Projects} from '../one'

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100%;
`
function Project() {
  return (
    <ProjectContainer>
<Header />
<Cta />
<Projects />
<Footer />
        </ProjectContainer>
  )
}

export default Project