import React from 'react';
// import { Image, Text } from '../../one'
import  { DescContainer,Title,Small,  Wrapper,HeaderWrapper, HeaderWrappers, Header, ItemWrapper,
   ImageWrapper, Image, TextWrapper, Other, Descs } from './desc.style'
import { Bounce } from 'react-reveal'
import { useQuery } from 'react-query'
import axios from 'axios'
function Desc() {
  const {isLoading, data, isFetching} = useQuery('get_desc', () => {
      return axios.get('http://localhost:5000/description')
  })
  if(isLoading || isFetching){
    return <h1>Loading...</h1>
  }
  return (
      <DescContainer>
      <HeaderWrapper>
        <Header>
            <Title>What Is Marn Stack</Title>
        <Descs width='80%'>reliable solution to a full-stack web application</Descs>
        </Header>
      </HeaderWrapper>
    <Wrapper>
      <Bounce>
    {
    data?.data.map((item) => (
        <ItemWrapper key={item.id}>
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
    </Bounce>
     </Wrapper>
      <HeaderWrappers>
        <Header>
            <Title>What Is Marn Stack</Title>
        <Descs width='80%'>reliable solution to a full-stack web application</Descs>
        </Header>
      </HeaderWrappers>
      </DescContainer>
  )
}

export default Desc;
