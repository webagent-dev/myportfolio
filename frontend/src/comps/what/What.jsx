import React from 'react'
import {  WhatContainer, Wrapper, ImageWrapper, Content, Title, Desc, Image, Container } from './what.style'
import { dos} from '../../data'
import { Flip } from 'react-reveal'
import { useQuery } from 'react-query'
import axios from 'axios'
function What() {
    const { isLoading, isFetching, data } = useQuery('get_skill', () => {
        return axios.get('http://localhost:5000/dos')
    })
    if(isLoading || isFetching){
        return <h1>Loading...</h1>
    }
  return (
    <WhatContainer>
            <Wrapper>
                <Flip right>
        {
            data?.data.map((item) => (
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