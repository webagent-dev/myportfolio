import styled from 'styled-components'


export const ProjectContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 20px;
    background: skyblue;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

`
 export const Header = styled.h1`
        font-weight: 700;
    text-align: center;
        font-family: 'Source Code Pro', monospace;
 `
  export const Info  = styled.div`

    color: black;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Mukta', sans-serif;
    line-height: 25px;
    text-align: center;
  `
  export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    align-items: center;
    gap: 1rem;
  `
  export const SelectContainer = styled.div`
  `
  export const Sort = styled.div`
    display: flex;
    width: 400px;
`
export const OptionContainer = styled.div`
  background: skyblue;
  color: #f5f6fa;
  /* max-height: 0; */
  width: 100%;
  /* opacity: 0; */
  transition: all 0.4s linear;
  border-radius: 8px;
  overflow: hidden; 
`
export const Option = styled.div`
padding: 12px 24px;
cursor: pointer;
&:hover{
  background: lightgray;
}
`
export const Input = styled.input`
  display: none;
`
export const Label = styled.label`
cursor: pointer;
`
export const SortHeader = styled.h1`
    text-transform: uppercase;
    font-family: 'Source Code Pro', monospace;
    color: skyblue;
`