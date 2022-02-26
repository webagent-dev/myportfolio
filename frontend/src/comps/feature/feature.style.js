import styled from 'styled-components'

 export const FeatureContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: 1rem;
 `
 export const Wrapper = styled.div`
  width: 90%;
    margin: 0 auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
@media (max-width:670px){
   padding: 5px;
    width: 100%;
   place-items: center;
}
    `
 export const Card = styled.div`
   background: #C7D2FE66;
          backdrop-filter: blur(10px);
    background-clip: border-box;
 box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.8), inset 6px 6px 12px rgba(255, 255, 255, 0.4);
 border-radius: 0px 3px 3px 0px; 
 
 `
 export const Image = styled.img`
    width: 100%;
    max-height: 250px;
    object-fit: center;
 `
  export const Cardcontent = styled.div``
 export const  Title = styled.h2``
 export const  Text  = styled.p``