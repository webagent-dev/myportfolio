import React,{ useState, useEffect, useCallback } from 'react'
import { CtaContainer, Wrapper, Button, Typo, Num, Option, Next, Back  } from './cta.style'
import { cta } from '../../data'
function Cta() {
  const [index, setIndex ] = useState(0)

  const moveCta = useCallback((direction) => {
   if(direction === 'left'){
    setIndex(index > 0 ? index - 1 : cta.length-1)
}else{
  setIndex(index < cta.length-1 ? index + 1 : 0)
}
  })

useEffect(() => {
  const getSlide = setInterval(() => {
      moveCta('right')
  },5000)
  return () => clearInterval(getSlide)
},[moveCta])
   return (
    <CtaContainer>
       {
         cta.map((item,i) => {
           const { id, title, msg } = item
           return(
              <Wrapper key={id} index={index}>
                          {
                  title.map((btn,i) => (
                    <>
                         <Button time='4s'>{btn.text}</Button>
                    </>
                  ))
                }
                  {/* <Typo>
                    I'm a <Typical />
                  </Typo> */}
        </Wrapper>
           )
         })
       }
           <Option>
             <Back>{'<'}</Back>
             <Num  onClick={() => moveCta('left')} direction='left'>{index}</Num>
             <Next onClick={() => moveCta('right')} direction='right'>{'>'}</Next>
           </Option>
    </CtaContainer>
  )
}

export default Cta