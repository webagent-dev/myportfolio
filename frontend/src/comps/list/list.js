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
max-height: 400px;
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
        transform: scale(1.1);
        padding: 10px;
        z-index: 1;
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
     cursor: pointer;
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
    font-size: 10px;
    padding: 5px;
    color: gray;
 `

  export const Stack  = styled.h3`
      text-align: center;
      text-decoration: underline;
      font-weight: 700;
      padding: 5px;
      margin-bottom: 5px;
      color: gray;
  `
  export const StackWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
        gap: .5rem;
      `
   export const Tech = styled.p`
      font-size: 8px;
      font-weight: 700;
      line-height: 1.5em;
      text-transform: capitalize;
      padding: 1px;
      background: skyblue;
      border: 1px solid gray;
      border-radius: 3px;
      cursor: pointer;
      color: green;
      text-align: center;
      font-family: monospace;
   `
   export const Other  = styled.div`
      margin-top: 15px;
      display: flex;
      align-items: center;
      gap: 1rem;
   `
    export const RateContainer  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    `
     export const Rate  = styled.div`
     display: flex;
     cursor: pointer;
      gap: .2rem;
     `
     export const Num  = styled.h5`
      font-weight: 700;
    font-size: 8px;
    font-family: 'Permanent Marker', cursive;
     `
      export const Comment  = styled.button`
         border-radius: 2px;
         border: none;
         outline: none;
         font-size: 12px;
         text-decoration: underline;
         color: skyblue;
         text-transform: capitalize;
         cursor: pointer;
         text-align: center;
    background: transparent;
    font-family: 'Permanent Marker', cursive;
    transition: all 1s linear;
         &:hover{
            background: skyblue;
            color: green;
                    text-decoration: none;
                     font-size: 10px;
                     border-radius: 5px;
                         padding:2px  5px;
         }
      `
       export const View  = styled(Comment)`
              font-size: 10px;
       `
       export const Icons = styled.div``