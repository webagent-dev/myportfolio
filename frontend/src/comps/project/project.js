import styled from 'styled-components'


export const ProjectContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 20px;
    background: skyblue;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`
 export const Header = styled.h1`
        font-weight: 700;
    text-align: center;
        font-family: 'Source Code Pro', monospace;

        @media (max-width:755px) {
            font-size: 20px;

        }
 `
  export const Info  = styled.div`

    color: black;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Mukta', sans-serif;
    line-height: 18px;
    text-align: center;
            @media (max-width:755px) {
            font-size: 12px;
        }
  `
  export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    align-items: center;
    gap: 1rem;
               @media (max-width:755px) {
                width: 100%;
        }
  `
  export const SelectContainer = styled.div`
  `
  export const Sort = styled.div`
    display: flex;
    width: 400px;
`
export const OptionContainer = styled.div`
  background: skyblue;
  color: #f5f6fa;
  /* max-height: 0; */
  width: 100%;
  /* opacity: 0; */
  transition: all 0.4s linear;
  border-radius: 8px;
  overflow: hidden; 
`
export const Option = styled.div`
padding: 12px 24px;
cursor: pointer;
&:hover{
  background: lightgray;
}
`
// export const Input = styled.input`
//   display: none;
// `
// export const Label = styled.label`
// cursor: pointer;
// `
export const SortHeader = styled.h1`
    text-transform: uppercase;
    font-family: 'Source Code Pro', monospace;
    color: skyblue;
`

// enable Component styled
 export const  EnableContainer = styled.div`
         width: 100%;
         height: 100%;
         background: rgba(0,0,0,0.6);
         position: absolute;
         top: 0;
         left: 0;
         overflow: hidden;
         display: flex;
         align-items: center;
         justify-content: center;
      `
       export const  Container = styled.div`
        width: 70%;
        height: 600px;
        margin: 0 auto;
        background: white;
        z-index: 99;
        border-radius: 5px;
        padding: 20px;

                    @media (max-width:755px) {
                      width: 90%;
                      height: auto;
            
        }
       `
      //  export const  Headers = styled.div``
       export const  Form = styled.form`
       width: 80%;
       margin: 0 auto;
        /* border:2px solid  lightgray; */
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: 20px;
        border-radius: 5px;
                         @media (max-width:755px) {
                        width: 100%;
                      height: auto;
            
        }
       `
        export const  Label = styled.label`
            font-family: 'Montserrat', sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: skyblue;
            padding: 5px 0px;
        `
         export const  Input = styled.input`
          width: 80%;
          padding: 10px 20px;
          border: none;
          outline: none;
          border: 1px solid gray;
          border-radius: 5px;
             background: lightgray;
             font-size: 20px;
              font-family: 'Montserrat', sans-serif;

                          @media (max-width:755px) {
                        width: 100%;
            
        }
         `
         export const Textarea = styled.textarea`
          max-width: 80%;
             min-width: 80%;
          max-height: 200px;
          min-height: 200px;
          border: none;
          outline: none;
          border-radius: 5px;
          background: lightgray;
              border: 1px solid gray;
                font-size: 15px;
                     padding: 10px 20px;
                      font-family: 'Montserrat', sans-serif;

                        @media (max-width:755px) {
                        min-width: 100%;
            
        }
         `
         export const MyComment = styled.p`
          text-align: center;
          padding: 10px;
          text-transform: capitalize;
          color: skyblue;
          font-size: 25px;
          font-family: 'Permanent Marker', cursive;

                  @media (max-width:755px) {
            font-size: 20px;
            
        }
         `

         export const Submit = styled.button`
          width: 200px;
          padding: 15px 25px;
          border: none;
          outline: none;
          margin: 0 auto;
          border-radius: 8px;
          font-size: 20px;
          font-weight: 700;
              font-family: 'Montserrat', sans-serif;
              color: skyblue;
  border: 1px solid gray;
  cursor: pointer;
                           @media (max-width:755px) {
                          margin-top: 15px;
            
        }
         `