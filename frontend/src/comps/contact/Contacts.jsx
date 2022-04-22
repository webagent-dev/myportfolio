import React from 'react'
import {  Container, HeaderContainer, Span, Header, Wrapper, SideOne,Big, Detail, Icon,Other, SideTwo, FormControl, First, Input, Second, Textarea, Submit, Small, Note} from './contact.style'
import { FcBusinessContact,FcCallback, FcFeedback, FcInvite, FcMindMap } from "react-icons/fc";
import { Flip, Zoom, LightSpeed } from 'react-reveal'
import FormikContainer  from './FormikContainer'
function Contacts() {
  return (
    <Container>
      <Flip>
        <HeaderContainer>
       <Header>Let's discuss your project </Header>
       <Span> <Small>What's Your Story ?</Small>
           Get in touch.Always available for <Small>freelancing</Small> <br /> if the right project comes along me</Span>
        </HeaderContainer>
        </Flip>
<Wrapper>
  <LightSpeed>
    <SideOne>
        <Big> Questions ?<br /> let's get in touch</Big>
        <Detail>
            <FcMindMap  size='40px' />
            <Other>23 water co-operation victorian island lagos</Other>
        </Detail>
          <Detail>
            <FcCallback  size='40px'/>
            <Other>+2349035765646</Other>
        </Detail>
        <Detail>
            <FcBusinessContact  size='40px'/>
            <Other>+2349035765646</Other>
        </Detail>
          <Detail>
            <FcInvite size='40px' />
            <Other>webagent24@gmail.com</Other>
        </Detail>
            <Detail>
            <FcFeedback  size='40px'/>
            <Other>wizkenny019@gmail.com</Other>
        </Detail>
    </SideOne>
    </LightSpeed>
    <Zoom>
    <SideTwo>
      <Note>Message Me </Note>
        <FormikContainer />
    </SideTwo>
    </Zoom>
</Wrapper>
    </Container>
  )
}

export default Contacts