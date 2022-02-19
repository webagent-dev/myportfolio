import styled from 'styled-components'

export const TextContainer = styled.div`
    flex: 1;
      display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Rowdies', cursive;
    z-index: 1;
`
export const Head = styled.h1`
    font-size: 4rem;
    font-family: 'Permanent Marker', cursive;
         @media(max-width: 750px){
         font-size: 3rem;
     }

          @media(max-width: 750px){
            font-size: 2rem;
     }         
`
export const P  = styled.p`

`