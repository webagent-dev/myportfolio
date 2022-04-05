import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
`

export const HeaderContainer = styled.div`
width: 100%;    
    background: skyblue;
    padding: 20px;
    min-height: auto;
`
  export const Header = styled.h1`
    text-align: center;
    font-size: 45px;
    font-weight: 700;
font-family: 'Mukta', sans-serif;
    text-transform: capitalize;
    color: whitesmoke;
    padding: 10px 0px;
    word-spacing: 5px;
    letter-spacing: 3px;

    @media(max-width: 670px){
       font-size: 35px;
    }
  `
  export const Small = styled.span`
  font-family: 'Permanent Marker', cursive;
  font-size: 22px;
  color: black;
  margin-right: 5px;
  padding: 0px 10px;
  letter-spacing: 3px;
      @media(max-width: 670px){
       font-size: 19px;
    }
  `
   export const Span = styled.p`
    text-align: center;
    color: whitesmoke;
    font-size: 20px;
 font-family: 'Mukta', sans-serif;
    line-height: 1.8em;
    font-weight: 700;
        @media(max-width: 670px){
       font-size: 18px;
    }
   `
   export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
        @media(max-width: 670px){
          justify-content: center;
    }
   `
    export const SideOne = styled.div`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-family: 'Mukta', sans-serif;
      padding: 10px;
          @media(max-width: 670px){
            gap: .5rem;
            padding: 5px;
    }
    `
   export const  Big = styled.h1`
    font-size: 40px;
    text-transform: capitalize;
  font-family: 'Mukta', sans-serif;
      @media(max-width: 670px){
       font-size: 30px;
    }
   `
   export const  Detail = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
   ` 
   export const  Other = styled.p`
    font-size: 20px;
    font-weight: 500;
    padding: 0px 5px;
    text-transform: capitalize;
        @media(max-width: 670px){
       font-size: 15px;
       padding: 2px;
    }
   `
   export const   SideTwo = styled.div`
      padding: 10px;
      margin-top: 100px;
          @media(max-width: 670px){
            margin-top: 5px;
    }
   `
   export const    Form = styled.form`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
   `
    export const    First = styled.div`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    ` 
     export const   Input = styled.input`
      width: 300px;
      height:70px;
      border: none;
      outline: none;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 0px 20px;

      &::placeholder{
        text-transform: capitalize;
          font-family: 'Mukta', sans-serif;
          font-weight: 500;
          color: gray;
      }
     `
      export const   Second = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
    
      ` 
      export const   Textarea = styled.textarea`
      width: 280px;
        min-width: 280px;
        max-width: 280px;
        height: 190px;
  min-height: 190px;
    max-height: 190px;
     border-radius: 5px;
        padding:  20px;
        border: none;
        outline: none;
        border-radius: 5px;
        border: 1px solid gray;
              &::placeholder{
        text-transform: capitalize;
          font-family: 'Mukta', sans-serif;
          font-weight: 500;
          color: gray;
      }
      ` 
       export const  Submit = styled.button`
       width: 250px;
       margin: 0 auto;
          padding: 8px 20px;
          border: none;
          outline: none;
          border: 1px solid gray;
          border-radius: 10px;
          background: skyblue;
          font-weight: 700;
font-family: 'Permanent Marker', cursive;
            font-size: 25px;
            color: white;
            letter-spacing: 4px;
      cursor: pointer;
       `

       export const Note = styled.p`
       display: none;
        width: 100%;
        height: auto;
        padding: 10px;
        margin-bottom: 5px;
        text-align: center;
        font-size: 20px;
        font-family: 'Permanent Marker', cursive;
        text-decoration: underline;
        font-weight: 700;
        
                  @media(max-width: 670px){
            display: block;
    }
       `