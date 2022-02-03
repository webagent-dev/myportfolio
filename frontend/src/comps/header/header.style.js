
import styled from 'styled-components'

export const HeaderContainer  = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 2px solid whitesmoke;
    position: relative;
    
.svg__wrapper{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    z-index: -99;
}

.svg__wrapper > svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 38px;
    transform: rotateY(180deg);
}

.svg__wrapper .shape-fill {
    fill: #F5EAEA;
}
@media (max-width: 715px) {
        position: absolute;
        bottom: 0;
            border-bottom: none;
            border-top: 2px solid whitesmoke;
}

@media(max-width:450px){
    z-index: 99;
       margin-bottom: 1.5rem; 
}
`
 export const HeaderWrapper = styled.div`
    width: 100%;
        height: 80px;
    padding: 20px;
        display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
bottom: 0;
    
 `
export const Logo = styled.h2`
font-family: 'Source Code Pro', monospace;
font-size: 10px!important;
font-size: 700;
color: skyblue;
/* letter-spacing: 2px; */
font-style: italic;

@media (max-width: 715px) {
        display: none;
}
`
export const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    font-family: 'Mukta', sans-serif;

    @media (max-width: 715px) {
        flex: 1;
}
@media (max-width: 715px) {
    flex: 1;
    justify-content: center;
    /* margin-left: 2rem; */
        gap: 3rem;
}
@media(max-width:450px){
        gap: 1rem;
    }
`

export const Li = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all .4s linear;
    box-shadow: inset -6px -6px -12px,inset 6px 6px 12px lightgray;
    transform: scale(1);

    &:hover{
        background: whitesmoke;
        padding: .2rem;
        border-radius: .5rem;
            transform: scale(1.1);
    }

`
export const Text = styled.div`
font-size: 10px;
@media(max-width:450px){
font-size: 8px;
}
`
export const User = styled.div`
display: flex;
align-items: center;
gap: 1rem;
font-family: 'Mukta', sans-serif;
@media (max-width: 715px) {
     display: none;
}
`
export const Button = styled.button`
    padding: 5px 15px;
    border: none;
    outline: none;
    background: whitesmoke;
    border-radius: 5px;
    cursor: pointer;
    font-size: 10px;
       transition: all .4s linear;
    transform: scale(1);
   &:hover{
             transform: scale(1.1);
     }
     `
export const Mode = styled.div`
    width: 60px;
    height: 20px;
    border: 1px solid gray;
     border-radius: 100px; 
     display: flex;
     align-items: center;
     justify-content: center;
     gap: .2rem;
     cursor: pointer;
        transition: all .4s linear;
    transform: scale(1);

     &:hover{
         background: black;
         color: white;
             transform: scale(1.1);
     }
`
export const On = styled.p`
font-size: 10px;
text-transform: capitalize;
font-family: monospace;
color: lightgray;
`
 export const Toggles = styled.div`
    display: none;
            &:hover{
        background: whitesmoke;
        padding: .2rem;
        border-radius: .5rem;
            transform: scale(1.1);
    }
    @media (max-width: 715px) {
        padding: 20px;
        display: block;
              transition: all .4s linear;
    transform: scale(1);
    cursor: pointer;
    }
` 

// Toggle Container Style

export const ToggleContainer = styled.div`
    width: 100%;
    height: 86vh;
    padding: 20px;
`