import styled from 'styled-components'

export const SingleContainer = styled.div`
width: 100%;
height: 100vh;
background: url('/assets/img/desc-header.svg');
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
position: relative;
position: relative;
`
export const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
        overflow-y: scroll;

`
export const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
`
 export const VideoContainer = styled.div`
 width: 100%;
 min-height: 400px;
box-shadow: inset -6px -6px -12px black inset 6px 6px 12px black;
 border: 2px solid gray;
 border-radius: 5px;
background: whitesmoke;

 `
  export const RateContainer = styled.div`
    display: flex;
    margin-top: 20px;
  `
  export const Rate = styled.div``
  export const Icon = styled.div``
  export const Num = styled.div``
  export const Title = styled.h2`
    color: white;
    font-weight: 700;
    font-family: 'Rowdies', cursive;
    font-size: 18px;
  `
  export const Div = styled.div`
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  `
  export const Name = styled.h1`
    font-family: 'Mukta', sans-serif;
    text-transform: capitalize;
    color: white;
  `
  export const TechContainer = styled.div``
  export const Tech = styled.div``
  export const Desc = styled.p`
    color: whitesmoke;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
       padding: 10px 20px;
  `
export const Underline = styled.div`
  width: 100px;
  height: 5px;
  background: skyblue;
  align-self: center;
`
   export const FuntContainer = styled.div``
   export const List = styled.li`
        color: whitesmoke;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
       padding: 5px 20px;
   `