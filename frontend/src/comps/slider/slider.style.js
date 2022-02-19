import styled from 'styled-components'

export const SliderContainer = styled.div`
    width: 100vw;
    height: 90vh;
    position: relative;
    display: flex;
     overflow: hidden;

     @media(max-width: 750px){
        height: 70vh;
     }
     @media(max-width: 490px){
        height: 50vh;
     }
`

export const Sliders = styled.div`
   min-width: 100%;
   height: 100%;
   display: flex;
   transform: translateX(${props => props.index * -100}vw);
        transition: all 2s linear;

     @media(max-width: 750px){
       gap: 1rem;
     }         
`

export const Arrow = styled.div`
   width: 40px;
   height: 40px;
   color: white;
   padding: 10px;
   position: absolute;
   background: darkgray;
   top: 0;
   bottom: 0;
   margin: auto;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   left: ${props => props.direction === 'left' && '15px'};
   right: ${props => props.direction === 'right' && '25px'};
   z-index: 1;

        @media(max-width: 490px){
    left: ${props => props.direction === 'left' && '10px'};
   right: ${props => props.direction === 'right' && '10px'};
     }
`