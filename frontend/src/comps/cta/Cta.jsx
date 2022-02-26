import React from 'react'
import { CtaContainer, Wrapper, Button,Typo  } from './cta.style'
function Cta() {
  return (
    <CtaContainer>
        <Wrapper>
            <Button time='4s'>View My Projects</Button>
               <Button time='8s'>About Me</Button>
                  <Button time='10s'>Hire Me</Button>
                  {/* <Typo>
                    I'm a <Typical />
                  </Typo> */}
        </Wrapper>
    </CtaContainer>
  )
}

export default Cta