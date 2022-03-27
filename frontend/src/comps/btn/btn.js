import styled from 'styled-components'

export const BtnListContainer =  styled.div`
width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
 export const Btn = styled.button`
    padding: 10px 25px;
    outline: none;
    border: none;
    font-family: 'Source Code Pro', monospace;
    font-weight: 700;
    font-size: 15px;
    text-transform: capitalize;
    border: 2px solid skyblue;
    background: lightgray;
    transition: all 1s linear; 

    &:hover{
        background: gray;
        color: white;
    }
    &:focus{
             background: skyblue;
        color: white;
        border-radius: 5px;
    }
 `