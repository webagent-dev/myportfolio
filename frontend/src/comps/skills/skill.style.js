import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: auto;
padding: 10px;
`

 export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;

   @media (max-width: 958px){
     width: 100%;
    flex-direction: column;
    }
 `
 export const MainContainer = styled.div`
 width: 90%;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem;
    transition: all 1s ease;
           @media (max-width: 958px){
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 1rem;
    }
 `
  export const BtnWrapper = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* margin-right: 10px; */

       @media (max-width: 958px){
         flex-direction: row;
         gap: 1rem;
           /* flex-wrap: wrap; */
    }
  `
  export const  Btn = styled.button`
  padding: 5px 15px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
     margin-right: 10px;

         @media (max-width: 380px){
  
            margin-right: 0px;
    }
  `
  export const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    background: lightgreen;
    padding: 10px;
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
            cursor: pointer;
            transition: all 1s ease;
    transform: scale(1);
    &:hover{
        transform: scale(1.2);
    }

           @media (max-width: 958px){
       width: 70px;
     height: 70px;

    }
  `
  export const Image = styled.img`
    width: 70%;
    height: 70%;
  `
  export const DescWrapper = styled.div``
  export const Content = styled.div``
  export const Title = styled.div`
        color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Mukta', sans-serif;
    font-size: 20px;
  `
  export const Desc = styled.div`
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        text-transform: capitalize;
  `
  export const Name = styled.div`
    position: absolute;
    color: green;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Mukta', sans-serif;
    font-size: 15px;
    text-align: center;
           @media (max-width: 958px){
            font-size: 10px;
    }
    
  `
  export const Click = styled.div``
  export const Small = styled.p``
  export const Icon = styled.div``