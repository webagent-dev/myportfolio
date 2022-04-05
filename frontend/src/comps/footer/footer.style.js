import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    background: url('assets/img/desc-header.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
        @media (max-width:670px){
          height: auto;
    }
`
export const MainWrapper = styled.div`
width: 90%;
margin: 0 auto;
   display: flex;
   flex: 1;
   align-items: center;
   gap: 2rem;
   justify-content: space-between;

    @media (max-width:670px){
      width: 100%;
      gap: .5rem;
    }
   `
     export const Header = styled.h2`
     width: 100%;
    padding: 10px;
    font-family: 'Rowdies', cursive;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer; 

        @media(max-width:670px){
         padding: 0px;
         font-size: 10px;
    }
  `
export const FirstContainer = styled.div`
width: 100%;
height: 100%;
flex: 1;
flex-wrap: wrap;

`
export const SecondContainer = styled.div`
height: 100%;
flex: 1;
width: 100%;
   flex-wrap: wrap;
`
 export const Container = styled.div``
 export const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    /* justify-content: space-between; */
        @media (max-width:670px){
         /* flex-direction: column; */
         padding: 10px;
         gap: .5rem;
    }
 `
  export const ThirdContainer = styled.div`
  height: 100%;
    flex: 1;
    padding: 10px;
    flex-wrap: wrap;
  `
  export const Logo = styled(Header)`
font-size: 700;
color: skyblue;
/* font-style: italic; */
  `
 export const Social = styled.div`
 /* flex: 1; */
     flex-wrap: wrap;
      font-family: 'Mukta', sans-serif;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
          @media (max-width:670px){
            font-size: 8px;
              font-weight: 700;
    }
 `
 export const Link = styled.div`
 /* width: 100%; */
 /* flex: 1; */
    flex-wrap: wrap;
      font-family: 'Mukta', sans-serif;
      text-transform: uppercase;
      font-size: 15px;
        font-weight: 700;
        cursor: pointer;
          @media (max-width:670px){
            font-size: 8px;
            font-weight: 700;
    }
 `
 export const Underline = styled.div`
    width: 100%;
    padding: 2px;
    background: darkgray;
    display: flex;
 `
  export const Foot = styled.div`
    text-align: center;
    padding: 10px;
     font-family: 'Mukta', sans-serif;
  `
 export const  Text = styled.div`
    text-align: center;
    padding: 10px;
   font-family: 'Mukta', sans-serif;
    font-size: 15px;
    font-weight: 700;
            @media (max-width:670px){
            font-size: 10px;
    }
 `

