import React,{ useState, useEffect, useCallback } from 'react'
import { CtaContainer, Wrapper, Button, Typo, Num, Option, Next, Back  } from './cta.style'
import { cta } from '../../data'
import { Bounce, LightSpeed } from 'react-reveal'
import { Link } from 'react-router-dom'
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
           <Bounce>
    <CtaContainer>
       {
         cta.map((item,i) => {
           const { id, title, msg } = item
           return(
             <LightSpeed>
              <Wrapper key={id} index={index}>
                          {
                  title.map((btn,i) => (
                    <>
                    {
                      btn.a ?    
                      <a href={btn.a}  rel="noreferrer" target="_blank">
                         <Button time='4s' key={i}>
                            {btn.text}
                           </Button>
                         </a>
                              :
                          <Link to={btn.link}>
                         <Button time='4s' key={i}>
                           {btn.text}
                           </Button>
                              </Link>
                          }
                    </>
                  ))
                }
                  {/* <Typo>
                    I'm a <Typical />
                  </Typo> */}
        </Wrapper>
        </LightSpeed>
           )
         })
       }
           {/* <Option>
             <Back>{'<'}</Back>
             <Num  onClick={() => moveCta('left')} direction='left'>{index}</Num>
             <Next onClick={() => moveCta('right')} direction='right'>{'>'}</Next>
           </Option> */}
      
    </CtaContainer>
         </Bounce>
  )
}

export default Cta