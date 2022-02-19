import styled from 'styled-components'

export const Close = styled.div`
width: 40px;
height: 40px;
border: black;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: .5rem;
`
export const ToggleWrapper = styled.div`
margin-top: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
height: 60px;
padding: 1rem;
 background: ${props => props.mode === 'true' ? 'black' : 'white'};
    color: ${props => props.mode === 'true' ? 'white' : 'black'};
`
 export const Logo  = styled.h2`
    font-family: 'Source Code Pro', monospace;
font-size: 8px!important;
font-size: 700;
color: skyblue;
font-style: italic;
cursor: pointer;
@media (max-width: 330px){
        font-size: 4px!important;
        font-weight: 700;
}
 `
 export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
 `
 export const Button = styled.button`
        padding: 5px 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 7px;
       transition: all .4s linear;
    transform: scale(1);
@media (max-width: 330px){
        font-size: 5px!important;
        font-weight: 700;
}
 `
 export const Mode = styled.div`
     width: 40px;
    height: 15px;
    border: 1px solid gray;
     border-radius: 100px; 
     display: flex;
     align-items: center;
     justify-content: center;
     gap: .2rem;
     cursor: pointer;
     `
 export const On = styled.div`
    font-size: 8px;
text-transform: capitalize;
font-family: monospace;
color: lightgray;
@media (max-width: 330px){
        font-size: 6px!important;
        font-weight: 700;
}
 `

 export const List = styled.div`
 height: 85vh;
    /* color:  white; */
    padding: 20px;
    overflow: scroll;
    z-index: 999;
 `
 export const Nav = styled.div``
 export const Li = styled.div`
    padding: 10px 0;
    font-weight: 700;
    margin-bottom: 10px;
    /* border: 2px solid lightgray; */
    font-size: 20px;
font-family: 'Rowdies', cursive;
display: flex;
align-items: center;
justify-content: space-between;

 `
export const  Hidden = styled.div``
 export const Title = styled.div``
 export const Drop = styled.div`
 font-size: 15px;
     padding: 15px 30px;
     border-bottom: 1px solid lightgray;
     font-family: 'Mukta', sans-serif;

     `
 export const Text = styled.div``
 export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
 `