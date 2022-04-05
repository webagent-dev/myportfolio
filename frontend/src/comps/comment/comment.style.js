import styled from 'styled-components'

export const CommentContainer = styled.div`
    width: 100%;
    height: 400px;
    padding: 20px;
    position: relative;
`
export const Header = styled.h1`
  text-align: center;
  padding: 10px;
  font-family: 'Permanent Marker', cursive;
`
export const Wrapper = styled.div`
min-width: 460px;
margin: 0px 10px;
box-shadow: inset -6px -6px -12px rgba(0, 0, 0, 0.5) inset 6px 6px 12px rgba(0, 0, 0,0.5);
padding: 10px;
border-radius: 10px;
color: white;
background-color: darkgray;
transform: translateX(0px);
`
 export const Text = styled.p`
  padding: 10px 20px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 1.5em;
  text-align: center;
 `
  export const Profile = styled.div``
  export const  Detail = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `
  export const Name = styled.h1`
    font-family: 'Alfa Slab One', cursive;
    text-transform: uppercase;
    font-size: 14px;
    color: blue;
  `
  export const Container = styled.div`

  width: 90%;
  margin: 0 auto;
    display: flex;
    overflow: hidden;
  `
  export const Arrow = styled.div`
  
   `

   export const ArrowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 1.5rem;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    font-family: cursive;
   `