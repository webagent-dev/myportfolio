import React from 'react'
import { MainContainer, FirstWrapper, SecondWrapper,Title, Desc, Social,Image, Resume, ImageWrapper,
Other, Hold, Icon,Mobile, MobileImageWrapper } from './main.style'
import {FaGithub, FaLinkedin } from 'react-icons/fa'
import { Circle } from '../../one'
function Main() {
  return (
 <MainContainer>
    <FirstWrapper>
    <Mobile> 
 <Title>Full-stack web developer </Title>
     <MobileImageWrapper>
          <Image src='/assets/img/port-use.png' alt='about-pic'/>
             <Title just='30px' style={{fontSize: '15px'}}>Webagent-dev</Title>
       </MobileImageWrapper>  
</Mobile> 
<Other>
<Desc>I am an enthusiatic developer with an addiction for discovering new coding perspectives. i really mean it</Desc>
<Social>
  <Hold>
    <Icon> <FaGithub color='skyblue'  size='25px' /></Icon>
    <Icon> <FaLinkedin color='skyblue'  size='25px'/></Icon>
  </Hold>

<Resume>Resume</Resume>
</Social>
</Other>
   <Circle top='-300px' left='-200px' />
     </FirstWrapper>
     <SecondWrapper>
       <ImageWrapper>
          <Image src='/assets/img/port-use.png' alt='about-pic'/>
       </ImageWrapper>
   
        <Title just='30px'>Webagent-dev</Title>
           {/* <CircleContainer top='60px' right='-150px'>

   </CircleContainer> */}
   <Circle  top='60px' right='-150px'/>
     </SecondWrapper>
 </MainContainer>
  )
}

export default Main