import styled from 'styled-components'


export const CircleContainer = styled.div`
    width: 80%;
    height: 80%;
    margin: 0 auto;
    border-radius: 50%;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    z-index: -1;
    overflow: hidden;
  background: linear-gradient(67deg, #a6d7ca, #141e1b, #cec8aa, #806781);
  background-size: 1000px 1000px;
   backdrop-filter: blur(10px);
    background-clip: border-box;
    border: 3px solid gray;
      box-shadow: inset -6px -6px -12px,inset 6px 6px 12px lightgray;
      transition: all 2s ease-in-out;
animation: circle 10s linear  infinite alternate;

          @keyframes circle {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}

@media(max-width: 490px){
  display: none;
}
`