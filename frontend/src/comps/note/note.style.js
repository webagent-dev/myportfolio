import styled from 'styled-components'

 export const Main = styled.div`
    width: 100%;
    height: 150px;
    background: skyblue;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
      @media(max-width: 780px){
        display: none;
  }
 `
  export const Header = styled.h1`
    color: white;
    text-align: center;
    text-transform: capitalize;
    font-family: 'Alfa Slab One', cursive;
    font-size: 30px;
  `
  export const Text = styled.p``
