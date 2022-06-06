import React, {  useCallback } from 'react'
// import { Underline } from '../footer/footer.style'
import { ProjectListContainer, Wrapper, Image, ProjectContent, Name, Underline,Desc,ImageWrapper, IconWrapper,Icon, Text, Stack,StackWrapper, Tech, Other, RateContainer, Rate, Num, Icons, Comment, View, Live } from './list'
import { FcInfo,  FcNightLandscape,} from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import { Flip, Bounce } from 'react-reveal'
const tech = [1,2,3,4,5]
function ProjectList({project, comment, focus}) {
  // console.log(project)
  const handleClick =useCallback( () => {
      comment(true)
      focus.current.focus()
  }, [comment, focus])
  // useEffect(() => {
  //   handleClick()
  // },[handleClick])
  return (
    <>
    <ProjectListContainer>
        <Flip bottom>
      {
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
              <Bounce>
            {
              tech.map((item,i) =>    <Tech key={i}>reactjs </Tech>)
            }
            </Bounce>
            </StackWrapper>
            <Other>
              <Live>
            <View>Live Site</View>
            </Live>
              <Comment type='button' onClick={ handleClick}>comment</Comment>
              <NavLink to='/get_project/1'>
              <View>See More Details</View>
              </NavLink>
            </Other>
          </Wrapper>
        ))
       }
    </Flip>
      </ProjectListContainer>
      </>
  )
}

export default ProjectList