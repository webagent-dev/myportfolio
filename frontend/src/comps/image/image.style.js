import styled from 'styled-components'

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Img = styled.img`
        width: 100%;
    height: 75%;
    object-fit: center;

         @media(max-width: 750px){
        height: 70%;
     }

          @media(max-width: 750px){
            height: 50%;
     }         
`