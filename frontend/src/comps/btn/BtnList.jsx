import React from 'react'
import { BtnListContainer, Btn,} from './btn'
function BtnList({btn, filter}) {
  return (
    <BtnListContainer>
      {
        btn.map((btn, i) => <Btn key={i} onClick={() => filter(btn)}>{btn}</Btn>)
    }</BtnListContainer>
  )
}

export default BtnList