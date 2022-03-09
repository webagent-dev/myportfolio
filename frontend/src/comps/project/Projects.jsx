import React, { useContext } from 'react'
import { ProjectContainer, HeaderContainer, Header, Info, Wrapper } from './project'
import { BtnList, ProjectList } from '../../one'
import { ThemeContext } from '../../context/ThemeContext'


function Projects() {
  const {items, cat, setCat } = useContext(ThemeContext)
  
  return (
    <ProjectContainer>
        <HeaderContainer>
            <Header> Prudly Created & Inspire. By Webagent-dev</Header>
            <Info>As a developer I take pride in what I do,There is a fair amount of ego involved in what I do, <br />
            The solutions I can devise are things to be proud of, 
            Cause it takes insight and keen knowledge to accomplish what I do </Info>
        </HeaderContainer>
        <Wrapper>
            <BtnList />
            <ProjectList />
        </Wrapper>
    </ProjectContainer>
  )
}

export default Projects