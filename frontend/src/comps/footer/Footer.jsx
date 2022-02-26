import React from 'react'
import { FooterContainer, MainWrapper, Wrapper,  FirstContainer, SecondContainer, ThirdContainer, Logo, Social, Link,Underline, Foot, Text, Header } from './footer.style'
function Footer() {
  return (
    <FooterContainer>
      <MainWrapper>
      < FirstContainer>
        < Logo>Webagent-dev</Logo>
        <Wrapper>
    <Text>webagent24@gmail</Text>
        </Wrapper>
     
      </FirstContainer>
      <SecondContainer>
    <Header>Links</Header>
    <Wrapper>
      <Link>About</Link>
       <Link>Projects</Link>
        <Link>Contact</Link>
         <Link>Resume</Link>
    </Wrapper>
      </SecondContainer>
      <ThirdContainer>
<Header>You Can Find Me Here</Header>
   <Wrapper>
        <Social>
          Facebook
        </Social>
        <Social>
          GitHub
        </Social>
                <Social>
                  Slack
        </Social>
                <Social>
                  Twitter
        </Social>
                <Social>
                  Instagram
        </Social>
        </Wrapper>
      </ThirdContainer>
      </MainWrapper>
      <Underline />
   
        <Foot>© Copyright  {new Date().getFullYear()}</Foot>
        <Text>Proudly Created By Webagent-Dev</Text>
     </FooterContainer>
  )
}

export default Footer