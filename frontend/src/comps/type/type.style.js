import styled from 'styled-components'

export const Container = styled.div`
max-width: 250px;
background: transparent;
border-top-right-radius: 70px;
border-bottom-left-radius: 50px;
border: 2px solid black;
cursor: pointer;
margin-top: 10px;
margin-bottom: 10px;

@media(max-width: 650px){
    min-width: 100%;
    text-align: center;
    border: none;
}
`

export const Text = styled.h1`
padding: 10px;
    font-size: 25px;
    text-transform: uppercase;
    font-family: 'Alfa Slab One', cursive;
    background: skyblue;
    margin-left: 5px;
    border-radius: 2px;

    @media(max-width: 450px){
        padding: 5px;
        margin: 0;
        font-size: 20px;
    }
`