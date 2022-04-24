import React, { useState } from 'react'
import { Container, Wrapper, BtnWrapper, Btn, ImageWrapper, MainContainer, Content,  Image, 
Title, Desc, Name, Click, Small,Icon, ClickUp } from './skill.style'
import Tippy from '@tippyjs/react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import 'tippy.js/dist/tippy.css'
import { tech } from '../../data'
import { Flip, Bounce } from 'react-reveal'
import { useQuery } from 'react-query'
import axios from 'axios'
const category = [ ...new Set(tech.map((item) => item.category))]
function Skill() {
     const [ items, setItems ] = useState([])
     const { isLoading, isFetching, data} = useQuery('get_tech', () => {
         return axios.get('http://localhost:5000/tech')
     })
     console.log(data?.data)
    const category = [ ...new Set(data?.data.map((item) => item.category))]
    const filtered = (category) => {
        const newItem = data?.data.filter((item) => item.category === category)
        setItems(newItem)
    } 
    if(isLoading || isFetching){
        return <h1>Loading...</h1>
    }
  return (
    <Container>
    <Wrapper>
        <Flip right>
        <BtnWrapper>
            {
                category.map((cat, i) =>(
                <Btn onClick={() => filtered(cat)}>
                       {cat}
                </Btn>))
            }
        </BtnWrapper>
        <MainContainer>
            {
                !items || !items.length ? 
                <>
                   <Bounce right>
                    <Click>
                        <Icon> <FaAngleDoubleLeft size='20px' color='skyblue' /></Icon>
                        <Small>Click me</Small>
                    </Click>
                    </Bounce>
                     <Bounce right>
                    <ClickUp>
                            <Icon> <FaAngleDoubleLeft size='20px' color='skyblue' /></Icon>
                        <Small>Click me</Small>
                    </ClickUp>
                    </Bounce>
                    </>
                : 
                items?.map((item) => { 
                         
                    return (
                          <Flip>
                        <>
                        <Tippy content={<Content>
                                <Title>{item.name}</Title>
                                <Desc>{item.desc}</Desc>
                        </Content>}>
                  <ImageWrapper>
                      <Image src={item.icon} alt='list_image'  />
                        <Name>{item.name}</Name>
                  </ImageWrapper>
      </Tippy>
               </>      </Flip> )
                }
                 )
            }
        </MainContainer>
        </Flip>
    </Wrapper>
    </Container>
  )
}

export default Skill