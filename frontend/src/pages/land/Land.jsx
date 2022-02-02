import React,{ useEffect } from 'react';
import styled from 'styled-components'
import { DiMongodb, DiNodejs, DiGithubFull } from 'react-icons/di'
import { SiExpress,SiSlack } from 'react-icons/si'
import { GrReactjs, GrFacebook,GrLinkedin } from 'react-icons/gr'
import Zoom from 'react-reveal'
import { LandContainer,  Title, LandDesc, Social, Icon, MoveContainer, Image1,
 Image2, Image3, Image4, Image5,  Image6,  Image7,  Image8, Text, Slide, SlideHeader, Span} from './land.style'
import { useSpring, animated, config  } from 'react-spring'
const calc = (x, y) => [- (y -window.innerHeight) / 2 / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s, ) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
 const LandWrapper = styled(animated.div)`
    width: 50%;
    height: 60%;
    padding: 3em;
    display: inline-block;
    background: #C7D2FE66;
    z-index: 99;
    border-radius: 10px;
    position: relative;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
function Land() {
     const [props, set] = useSpring(() => ({ xys: [0,0,1], config: config.default}))
  return (
  <LandContainer>
  
    <LandWrapper
    onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
    onMouseLeave={() => (set({xys:[0,0,1]}))}
    style={{
      transform: props.xys.interpolate(trans)
    }}
    >
        <Zoom bottom>
<Title>Welcome To  WEBAGENT-DEV Page</Title>
<LandDesc>Am  a <Span text='darkgreen'>M</Span>  <Span  text='orange'>E</Span>  <Span  text='blue' >R</Span>  <Span  text='green'>N</Span> web and mobile Developer</LandDesc>
<Slide>
    <Text text='darkgreen'> <DiMongodb  size='30px'/> MongoDB</Text>
    <Text   text='orange'> <SiExpress  size='30px'/> Express</Text>
    <Text text='blue' > <GrReactjs  size='30px'/> ReactJs</Text>
    <Text  text='green'> <DiNodejs size='30px' /> NodeJs</Text>
</Slide>
<Social>
  <Icon>
<DiGithubFull color='white' size='25px'/>
  </Icon>
  <Icon>
<GrLinkedin color='white' size='25px'/>
  </Icon>
  <Icon>
<SiSlack color='white' size='25px'/>
  </Icon>
</Social>
 </Zoom>
    </LandWrapper>
   
    <MoveContainer> 
      <Image1 src='/assets/img/myport-javascript-icon.png'/>
      <Image2  src='/assets/img/myport-node-icon.png'/>
      <Image3  src='/assets/img/myport-react-icon.png'/>
      <Image4  src='/assets/img/myport-native-icon.png'/>
     
      <Image5  src='/assets/img/myport-css-icon.png'/>
    
      <Image6  src='/assets/img/myport-material-icon.png'/>

      <Image7 src='/assets/img/myport-redux-icon.png'/>
      <Image8  src='/assets/img/myport-git-icon.png'/>
      </MoveContainer>
    <div class="custom-shape-divider-bottom-1643788872">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
  </LandContainer>
  )
}

export default Land;
