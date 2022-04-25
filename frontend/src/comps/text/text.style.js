import styled from 'styled-components'

export const TextContainer = styled.div`
    flex: 1;
    width: 80%;
    margin: 0 auto;
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
    font-size: 5rem;
    color: gray;
    font-family: 'Permanent Marker', cursive;
    text-align: center;
         @media(max-width: 750px){
         font-size: 4rem;
     }

          @media(max-width: 750px){
            font-size: 2.5rem;
     }         
`
export const P  = styled.p`
        width: 80%;
     margin: 0 auto;
        text-align: center;
`