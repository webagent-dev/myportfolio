import React from 'react'
import {  WhatContainer, Wrapper, ImageWrapper, Content, Title, Desc, Image, Container } from './what.style'
import { dos} from '../../data'
import { Flip } from 'react-reveal'
function What() {
  return (
    <WhatContainer>
            <Wrapper>
                <Flip right>
        {
            dos.map((item) => (
                            <Container key={item.id}>
                <ImageWrapper>
                    <Image  src={item.image} alt='do_image'/>
                </ImageWrapper>
                <Content>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc} </Desc>
                </Content>
                </Container>
            ))
        }
        </Flip>
            </Wrapper>
    </WhatContainer>
  )
}

export default What