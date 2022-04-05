import styled from 'styled-components'

export const Main = styled.div`
   
`

 export const Page = styled.div`
        width: 21cm;
  min-height: 29.7cm;
  margin: 0 auto;
  display: flex;
  color: rgba(0, 0, 0, 0.8);
  background-color: #fff;

  &::after{
        position: absolute;
  top: 29.7cm;
  left: 0;
  z-index: -1;
  content: '';
  height: 1px;
  width: 100vw;
  background-color: #000;
  }
 `
export const  SideOne = styled.div`
      padding: 15px;
        flex-basis: 30%;
  border-right: 1px solid #ccc;
`
export const   SideTwo  = styled.div`
      padding: 15px;
        flex: 1;
`