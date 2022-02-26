import styled from 'styled-components'


export const  DescContainer = styled.div`
    width: 100%;
    height: auto;
    background: whitesmoke;
    padding: 10px;

`
export const Wrapper = styled.div`
width: 90%;
height: auto;
margin: 0 auto;
margin-top: 1rem;

@media (max-width:670px){
    width: 100%;
    margin-top: 0px;
}
`
export const HeaderWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
        height: 70px;
          background: linear-gradient(47deg, #a6d7ca, #141e1b, #cec8aa, #806781);
          border-radius: 2px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-size: 800% 800%;
    animation: headermove 22s ease infinite;
              backdrop-filter: blur(10px);
    background-clip: border-box;
/* box-shadow: inset -6px -6px -12px, inset 6px 6px 12px; */
 box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.8), inset 6px 6px 12px rgba(255, 255, 255, 0.4);

@keyframes headermove {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
@media (max-width:670px){
    width: 100%;
            border-radius: 2px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
`
export const Header = styled.div`
    width: 400px;
height: 100%;
    background: url('/assets/img/desc-header') ;
    color: white;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    @media (max-width:670px){
     width: 100%;
padding: 5px;
}
`
export const ItemWrapper = styled.div`
width: 100%;
height: 400px;
display: flex;
z-index: 99;
position: relative;
 .divider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    z-index: -1;
}

.divider svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 500px;
}

.divider .fill {
    fill:  #C7D2FE66;
          backdrop-filter: blur(10px);
    background-clip: border-box;
/* box-shadow: inset -6px -6px -12px, inset 6px 6px 12px; */
 box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.8), inset 6px 6px 12px rgba(255, 255, 255, 0.4);

} 

@media (max-width:670px){
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background: url('assets/img/desc-header.svg');
    background-size: cover;
    flex-direction: column;
    height: auto;
margin-top: 2rem;
    z-index: 1;
    .divider{
        display: none;
    }
}
`
export const HeaderWrappers = styled.div`
 border-radius: 2px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
      margin: 0 auto;
    margin-top: 1rem;
        width: 90%;
        height: 70px;
          background: linear-gradient(47deg, #a6d7ca, #141e1b, #cec8aa, #806781);
                    backdrop-filter: blur(10px);
    background-clip: border-box;
/* box-shadow: inset -6px -6px -12px, inset 6px 6px 12px; */
 box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.8), inset 6px 6px 12px rgba(255, 255, 255, 0.4);
         
    background-size: 800% 800%;
    animation: headermove 22s ease infinite;
    box-shadow: inset -6px -6px -12px, inset 6px 6px 12px black;

    @keyframes headermove {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
@media (max-width:670px){
    width: 100%;
            border-radius: 2px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}
`
export const Title = styled.h1`
    /* font-family: 'Alfa Slab One', cursive; */
    font-family: 'Permanent Marker', cursive;

        @media (max-width:670px){
            font-size: 25px;
    }
`
export const Small = styled.small`
/* font-size: 12px; */
`

   export const  ImageWrapper  = styled.div`
   align-self: center;
   width: 100%;
   height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:670px){
        height: 80%;
        height: 80%
    }
   `
   export const   Image = styled.img`
    width: 60%;
    height: 60%;
    object-fit: center;
     border-radius: 50%;
      @media (max-width:670px){
        border-radius: 0%;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
   `
    export const  TextWrapper = styled.div`
        flex: 1;
        gap: 1rem;
        align-self: center;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
    `
     export const  Other = styled.p`
        max-width: 70%;
        font-family: 'Montserrat', sans-serif;
     `
    export const   Descs = styled.h3`
font-family: 'Rowdies', cursive;
 max-width: ${props => props.width};
 font-size: 12px;
 text-align: center;
 text-transform: capitalize;
 font-style: italic;
     @media (max-width:670px){
        font-size: 10px;
    }
    `