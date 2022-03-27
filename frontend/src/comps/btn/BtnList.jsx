import React from 'react'
import { BtnListContainer, Btn,} from './btn'
function BtnList({btn}) {
  // console.log(btn)
  return (
    <BtnListContainer>
      {
        btn.map((btn) => <Btn key={btn}>{btn}</Btn>)
    }</BtnListContainer>
  )
}

export default BtnList