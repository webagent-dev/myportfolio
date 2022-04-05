import React from 'react'
import { BtnListContainer, Btn,} from './btn'
import { Flip } from 'react-reveal'
function BtnList({btn, filter}) {
  return (
    <Flip right>
    <BtnListContainer>
      {
        btn.map((btn, i) => <Btn key={i} onClick={() => filter(btn)}>{btn}</Btn>)
    }
    </BtnListContainer>
      </Flip>
  )
}

export default BtnList