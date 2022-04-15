import styled from 'styled-components'

export const Main = styled.div``
 export const FeatureContainer = styled.div`
 /* Old Style sheet */
    /* width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: 1rem; */
    /* New Style style sheet */
   max-width: 100vw;
   margin-inline: auto;
   /* padding-inline: 2rem; */
 `
 export const FeatureGrid  = styled.div`
 /* old style Sheet */
  /* width: 90%;
    margin: 0 auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
@media (max-width:670px){
   padding: 5px;
    width: 100%;
   place-items: center;
/* } */
   /* New Style sheet */
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: .25rem;

    `
 export const Card = styled.div`
 /* Old Styled sheet */
   /* background: #C7D2FE66;
          backdrop-filter: blur(10px);
    background-clip: border-box;
 box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.8), inset 6px 6px 12px rgba(255, 255, 255, 0.4);
 border-radius: 0px 3px 3px 0px;  */
 
 /* New Styled Sheet */
 aspect-ratio: 1 / 1.2;
 `
 export const Image = styled.img`
 /* Old Styled Sheet */
    /* width: 100%;
    max-height: 250px;
    object-fit: center; */

    /* new Styled Sheet */
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;

 `
  export const Cardcontent = styled.div`
   background: white;
   align-self: end;
   margin: .5rem .5rem 2rem;
   padding: .5rem;
   box-shadow: 0 .25rem 1rem rgba(0 0 0 / .1);
  `
 export const  Title = styled.h2``
 export const  Text  = styled.p``
