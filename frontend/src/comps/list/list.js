import styled from 'styled-components'

export const ProjectListContainer  = styled.div`
width: 100%;
height: 80vh;
padding: 20px;
margin-top: 20px;
   overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    gap: 1rem;
border-radius: 5px;
    box-shadow: inset -6px -6px -12px, inset 6px 6px 12px lightgray;

`
 export const ProjectContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
opacity: 0;
  
        background: rgba(0,0, 0, 0.8);
        width: 100%;
        height: 100%;
        /* background: green; */

 `
export const Wrapper = styled.div`
    background: whitesmoke;
    padding: 10px; 
     transform: scale(1);
        transition: all 1s ease-in-out; 

    &:hover{
        transform: scale(1.2);
        padding: 10px;
    }
         &:hover ${ProjectContent}{
         opacity: 1;
     }
`

export const ImageWrapper = styled.div`
    position: relative;
        width: 100%;
    height: 150px;
    border-radius: 5px;
     
`

 export const  IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
            transform: scale(1);
        transition: all 1s ease-in-out; 

     &:hover{
        transform: scale(1.2);

    }
 `
 export const  Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 5px;
 `
 export const  Text  = styled.small`
    color: white;
    text-transform: uppercase;
    font-size: 8px;
    color: skyblue;
 `
 export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: center;
 `
  export const Name = styled.h2`
    padding: 10px;
    text-align: center;
        margin-bottom: 10px;
        font-size: 18px;
        text-transform: capitalize;
        font-family: 'Mukta', sans-serif;

 `
 export const Underline = styled.div`
    width: 100%;
    height: 5px;background: skyblue;
 `
 export const Desc = styled.p`
    text-align: center;
    line-height: 1.5em;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    font-size: 12px;
    padding: 5px;
 `