import React,{ useEffect } from 'react';
import { LandContainer, LandWrapper, Title, LandDesc, Social, Icon, MoveContainer, Image } from './land.style'
import { useSpring } from 'react-spring'
const calc = (x, y) => [- (y -window.innerHeight) / 2 / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s, ) => `perspective(600px) rotateX($(x)deg) rotateY(${y}deg) scale(${s})`
function Land() {
     const [props, set] = useSpring(() => ({ xys: [0,0,1], config: {mass: 10, tension: 200, friction: 50 }}))
     useEffect(() => {
      set.start()
     },[])
  return (
  <LandContainer>
    <LandWrapper
    onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
    onMouseLeave={() => (set({xys:[0,0,1]}))}
    style={{
      transform: props.xys.to(trans)
    }}
    >
<Title></Title>
<LandDesc></LandDesc>
<Social>
  <Icon></Icon>
</Social>
    </LandWrapper>
    <MoveContainer> 
      <Image  src='/assets/img/myport-javascript-icon.png'/>
      <Image  src='/assets/img/myport-node-icon.png'/>
      <Image  src='/assets/img/myport-react-icon.png'/>
      <Image  src='/assets/img/myport-native-icon.png'/>
      <Image  src='/assets/img/myport-css-icon.png'/>
      <Image  src='/assets/img/myport-material-icon.png'/>
      <Image  src='/assets/img/myport-redux-icon.png'/>
      <Image  src='/assets/img/myport-git-icon.png'/>
    </MoveContainer>
  </LandContainer>
  )
}

export default Land;
