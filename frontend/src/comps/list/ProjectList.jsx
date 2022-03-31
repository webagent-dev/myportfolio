import React from 'react'
// import { Underline } from '../footer/footer.style'
import { ProjectListContainer, Wrapper, Image, ProjectContent, Name, Underline,Desc,ImageWrapper, IconWrapper,Icon, Text, Stack,StackWrapper, Tech, Other, RateContainer, Rate, Num, Icons, Comment, View} from './list'
import { FcPortraitMode,FcList, FcContacts,FcInfo, FcMenu,FcMinus, FcNightLandscape,FcLightAtTheEndOfTunnel} from 'react-icons/fc'
const tech = [1,2,3,4,5]
function ProjectList({project}) {
  // console.log(project)
  return (
    <ProjectListContainer>{
        project.map((item) => (
          <Wrapper key={item.id}>
            <ImageWrapper>
                 <Image src='/assets/img/api.jpg' alt='project_pix'/>
                  <ProjectContent>
                     <IconWrapper>
                      <Icon  src="https://img.icons8.com/color-glass/48/000000/video.png" alt='icon_pic'/>
                      <Text>view demo</Text>
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
            <Stack>Tech</Stack>
            <StackWrapper>
            {
              tech.map((item,i) =>    <Tech key={i}>reactjs </Tech>)
            }
            </StackWrapper>
            <Other>
              <RateContainer>
                <Rate>
                  <Icons><FcInfo /></Icons>
                  <Num>233</Num>
                </Rate>
                  <Rate>
                  <Icons><FcNightLandscape /></Icons>
                  <Num>345</Num>
                </Rate>
              </RateContainer>
              <Comment type='button'>comment</Comment>
              <View>See More Details</View>
            </Other>
          </Wrapper>
        ))
      }</ProjectListContainer>
  )
}

export default ProjectList