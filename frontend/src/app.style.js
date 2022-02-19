import { createGlobalStyle } from 'styled-components'

import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     /* background: linear-gradient(47deg, #aac3c5, #b7a4b7, #aeada4, #cfc1d0); */
    background-size: 800% 800%;
        /* background: ${props => props.mode && 'linear-gradient(47deg, #1f4749, #231823, #383421, #4b2314)'}; */
        color: ${props => props.mode && 'white'};

    animation: app 5s ease infinite;
    }
    @keyframes app {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
`

export const AppContainer = styled.div`
    width: 100vw;
    height: 100%;
`