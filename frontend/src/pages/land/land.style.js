import styled from 'styled-components'
import {  animated } from 'react-spring'
export const LandContainer = styled.div`
width: 100%vw;
height: 100vh;
 background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("/assets/img/myport-bg.jpg"); 
background-size: 'cover';
background-position: 'center center';
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
export const LandWrapper = styled(animated.div)`
    width: 50%;
    height: 50%;
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
`
export const Title = styled.div`

`
export const  LandDesc = styled.div`

` 
export const Social = styled.div`

` 
export const Icon = styled.div`

`
export const MoveContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`
export const Image = styled.img``