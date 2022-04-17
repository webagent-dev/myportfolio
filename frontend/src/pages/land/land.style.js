import styled from 'styled-components'
import {  } from 'react-spring'
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
flex-direction: column;
position: relative;
gap: 2rem;
transition: all 2s ease-in-out;
overflow-x: hidden;
overflow-y: scroll;
  animation: app 5s linear infinite alternate;

.custom-shape-divider-bottom-1643788872 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1643788872 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 283px;
}

.custom-shape-divider-bottom-1643788872 .shape-fill {
    fill: lightgray;
    opacity: .5;
}

    @keyframes app {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
`

export const Title = styled.div`
max-width: 700px;
padding: 10px;
text-align: center;
font-size: 30px;
text-transform: uppercase;
color: #164054;
    font-family: 'Alfa Slab One', cursive;

            @media (max-width: 630px){
                      font-size: 20px;    
    }
`
export const  LandDesc = styled.div`
font-family: 'Mukta', sans-serif;
font-size: 25px;
font-weight: 700;
text-transform: capitalize;
text-align: center;

   @media (max-width: 630px){
                      font-size: 18px;    
    }
` 
export const Social = styled.div`
display: flex;
gap: 1rem;
padding: 20px;

   @media (max-width: 630px){
                   padding: 15px;
    }

` 
export const Icon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    background: black;
    border: 1px solid gray;
    border-radius: 50%;
    align-items: center;
justify-content: center;
cursor: pointer;
padding: 5px;
transform: scale(1);
transition: all .5s linear;
&:hover{
    transform: scale(1.2); 
    background: transparent !important;
    color: black;
}
   @media (max-width: 630px){
                    width: 30px;
    height: 30px;
    }
`
export const MoveContainer = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    animation: animate 10s linear  infinite;
   
    @keyframes animate{
        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100%{
            transform: translateY(-800px) rotate(360deg);
            opacity: 0;
        }
    }
`
export const Image1 = styled.img`
position: absolute;
   bottom: 160px;
       left: 76%;
        height: 80px;
        width: 80px;
        animation-delay: 0s;
           object-fit: contain;
`
export const Image2 = styled.img`
position: absolute;
       bottom: 120px;
       left: 32%;
        height: 80px;
        width: 80px;
        animation-delay: 1.5s;
        animation-duration: 10s;
           object-fit: contain;
`
export const Image3 = styled.img`
position: absolute;
   bottom: 180px;
           left: 12%;
        height: 100px;
        width: 100px;
        animation-delay: 5.5s;
           object-fit: contain;
`
export const Image4 = styled.img`
position: absolute;
             bottom: 190px;
       right: 50%;
        height: 50px;
        width: 50px;
        animation-delay: 0s;
        animation-duration: 15;
           object-fit: contain;
`
export const Image5 = styled.img`
position: absolute;

bottom: 90px;
        right: 55%;
        height: 40px;
        width: 40px;
        animation-delay: 0;
           object-fit: contain;
        `
export const Image6 = styled.img`
position: absolute;
top: 50px;
            /* left: -15%; */
        height: 50px;
        bottom: 30px;
        width: 110px;
        animation-delay: 3.5s;
           object-fit: contain;
`
export const Image7 = styled.img`
position: absolute;
top: 80px;
bottom: 30px;
       left: 82%;
        height: 80px;
        width: 80px;
        animation-delay: 3.5s;
           object-fit: contain;
        `
export const Image8 = styled.img`
top: 50px;
    bottom: 30px;
       left: 40%;
        height: 30px;
        width: 30px;
        animation-delay: 3.5s;
        object-fit: contain;
`
export const SliderHeader = styled.div``
export const Slide = styled.div`
    width: 100%;
    height: 200px;
    height: 30px;
    padding: 20px;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

   

`
export const Span = styled.div`
display: inline-block;
color: ${props => props.text};
font-family: 'Permanent Marker', cursive;
font-size: 30px;
font-weight: 500;
   @media (max-width: 630px){
                font-size: 20px;  
    }
`
export const Text = styled.div`
font-family: 'Permanent Marker', cursive;
height: 55px;
font-size: 30px;
color: ${props => props.text};
animation: move 10s ease-in-out infinite alternate;

 @keyframes move {
            25%{
                transform: translateY(-70px);
            }50%{
                         transform: translateY(-120px);
            }75%{
                         transform: translateY(-130px);
            }100%{
                             transform: translateY(-210px);
            }
    }
       @media (max-width: 630px){
                font-size: 25px;  
    }
`

export const Loading = styled.div`
font-size: 2rem;
font-weight: 700;
font-family: 'Rowdies', cursive;
animation: jump 10s linear infinite alternate;
padding: 5px;
text-align: center;

@keyframes jump {
    0%{
            transform: scale(1);
            opacity: 0.3;
    }50%{
               transform: scale(1.2);
            opacity: 1;
            color: whitesmoke;
    }100%{
               transform: scale(1);
            opacity: 0.3;
    }

}

       @media (max-width: 340px){
                font-size: 1rem;  
    }
`
export const Small = styled.small`
display: block;
padding: 5px 15px;
color: skyblue;
font-family: 'Alfa Slab One', cursive;
text-align: center;
font-size: 20px
font-weight: 500;
`