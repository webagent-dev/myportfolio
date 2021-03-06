import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow:hidden;
    background: whitesmoke;
         @media(max-width: 480px){
      height: auto;
 }
`

 export const FirstWrapper = styled.div`
    flex: 1;
    position: relative;
       overflow: none;
       z-index: 1;
       display: flex;
       align-items: center;
       flex-direction: column;
       justify-content: center;
       gap: 1rem;
 `
 export const Other = styled.div`
 width: 100%;
  padding: 20px;
  background: skyblue;
  border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
 `
export const  SecondWrapper = styled.div`
flex: 1;
position: relative;
 z-index: 1;
 @media(max-width: 480px){
    display: none;
 }
`
export const Resume = styled.button`
  border: none;
  padding: 5px 20px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  border-radius: 3px;
  cursor: pointer;
        transition: all .5s linear ;
      transform: scale(1);

      &:hover{
        transform: scale(1.2);
      }
`
export const Icon = styled.a`
  background: whitesmoke;
  padding: 2px  5px;
     backdrop-filter: blur(10px);
    background-clip: border-box;
    /* border: 3px solid gray; */
      box-shadow: inset -3px -3px -6px,inset 3px 3px 6px gray;
      border-radius: 3px;
      cursor: pointer;
      transition: all .5s linear ;
      transform: scale(1);

      &:hover{
        transform: scale(1.2);
      }
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 80vh;
`
 export const Title = styled.h1`
  font-weight: 700;
  font-family: 'Alfa Slab One', cursive;
  text-transform: uppercase;
  margin-bottom: ${props => props.just};

       @media(max-width: 480px){
    display: block;
    height: auto;
    font-size: 25px;
 }
`
  export const Desc = styled.p`
    max-width: 90%;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
    /* text-align: center; */
    font-family: 'Source Code Pro', monospace;
  `
  export const Hold = styled.div`
  display: flex;
  gap: 1rem;
  
  `
  export const Social = styled.div`
  margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
  `
  export const Image = styled.img`
    width: 100%;
    object-fit: contain;
  `

  export const Mobile = styled.div`
      display: flex;
      align-items: center;
  `
  export const  MobileImageWrapper = styled(ImageWrapper )`
      display: none;

       @media(max-width: 480px){
    display: block;
    height: auto;
 }
  `