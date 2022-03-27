import React from 'react'
// import { Underline } from '../footer/footer.style'
import { ProjectListContainer, Wrapper, Image, ProjectContent, Name, Underline,Desc,ImageWrapper, IconWrapper,Icon, Text  } from './list'
import { FcFilm } from "react-icons/fc";
function ProjectList({project}) {
  console.log(project)
  return (
    <ProjectListContainer>{
        project.map((item) => (
          <Wrapper key={item.id}>
            <ImageWrapper>
                 <Image src='/assets/img/api.jpg' alt='project_pix'/>
                  <ProjectContent>
                     <IconWrapper>
                      <Icon  src="https://img.icons8.com/color-glass/48/000000/video.png" alt='icon_pic'/>
                      <Text>watch video</Text>
                    </IconWrapper>
                     <IconWrapper>
                      <Icon  src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-view-cyber-security-kiranshastry-lineal-color-kiranshastry-3.png" alt='icon_pic'/>
                      <Text>view details</Text>
                    </IconWrapper>
                    <IconWrapper>
                        <Icon  src="https://img.icons8.com/dusk/64/000000/github.png" alt='icon_pic'/>
                      <Text>view code</Text>
                    </IconWrapper>
              </ProjectContent>
            </ImageWrapper>
        
            <Name>{item.name}</Name>
            <Underline />
            <Desc>{item.desc}</Desc>
          </Wrapper>
        ))
      }</ProjectListContainer>
  )
}

export default ProjectList