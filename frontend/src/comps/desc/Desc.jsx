import React from 'react';
// import { Image, Text } from '../../one'
import  { DescContainer,Title,Small,  Wrapper,HeaderWrapper, Header, ItemWrapper,
   ImageWrapper, Image, TextWrapper, Other, Descs } from './desc.style'
import { desc } from '../../data'
const list = [1,2,3,4]
function Desc() {
  return (
      <DescContainer>
      <HeaderWrapper>
        <Header>
            <Title>What Is Marn Stack</Title>
        <Descs width='80%'>reliable solution to a full-stack web application</Descs>
        </Header>
      </HeaderWrapper>
    <Wrapper>
    {
    desc.map((item, i) => (
        <ItemWrapper key={i}>
              <ImageWrapper>
                  <Image  src={item.img} alt='img_desc' />
                </ImageWrapper>
                  <TextWrapper>
                  <Title> {item.title} </Title>
                  <Descs width='60%'>{item.desc}</Descs>
                  <Other>
                  {item.other}
                  </Other>
                </TextWrapper>
                  <div className="divider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="fill"></path>
    </svg>
</div>
        </ItemWrapper>
      ))
    }
     </Wrapper>
      </DescContainer>
  )
}

export default Desc;
