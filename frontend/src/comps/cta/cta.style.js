import styled from 'styled-components'

export const CtaContainer  = styled.div`
    width: 100%;
    height: 400px;
    background-color: whitesmoke;
 background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),  url('/android-chrome-512x512.png');
display: flex;
position: relative;
overflow: hidden;

   animation: app 5s linear infinite alternate;

       @keyframes app {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
@media (max-width:670px){
    height: 200px;
    background-size: 100px;
}
`
export const Num = styled.div`
    font-family: monospace;
    font-size: 20px;
`
 export const Wrapper = styled.div`
  min-width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
      overflow: hidden;
     transform: translateX(${props => props.index * -100}vw);
        transition: all 2s linear;


    @media (max-width:670px){
        width: 100%;
    }
 `
 export const  Button = styled.button`
 width: 200px;
 height: 60px;
    border: none;
    outline: none;
    padding: 10px 25px;
    border-radius: 5px;
    font-family: 'Source Code Pro', monospace;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 1s ease-in-out;
    animation: move ${props => props.time} ease infinite alternate;

    &:hover{
        background: lightgray;
    }
    @keyframes move {
        0%{
            transform: scale(1);
        }50%{
                      transform: scale(1.1);
                      font-size: 8px;
        }100%{
              transform: scale(1)
        }
    }
    @media (max-width:670px){
        width: 90px;
        height: 30px;
        font-size: 5px;
        font-weight: 500;
    }
 `

 export const Option = styled.div`
 z-index: 99;
 position: absolute;
 bottom: 5px;
 left: 50%;
 right: 50%;
 display: flex;
 align-items: center;
gap: 1rem;

 `
 export const  Next = styled.div`
 font-size: 40px;
 font-weight: 700;
 font-family: cursive;
 cursor: pointer;
 `
  export const  Back = styled(Next)``