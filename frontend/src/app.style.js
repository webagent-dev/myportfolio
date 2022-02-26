import { createGlobalStyle } from 'styled-components'

import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
         background-position:center center;    
    background-size: 800% 800%;
        color: ${props => props.mode && 'white'};
    }
`

export const AppContainer = styled.div`
    width: 100vw;
    height: 100%;
    overflow: hidden;
`