import styled from 'styled-components'

export const BtnListContainer =  styled.div`
width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
              @media (max-width:465px) {
                gap: .5rem;
                padding: 10px;
        }
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
                @media (max-width:645px) {
            font-size: 12px;
               padding: 8px 15px;
        }
          @media (max-width:465px) {
            font-size: 8px;
               padding: 5px 10px;
        }
 `