import React, { useState } from 'react'
import { Container, Wrapper, BtnWrapper, Btn, ImageWrapper, MainContainer, Content,  Image, 
Title, Desc, Name, Click, Small,Icon} from './skill.style'
import Tippy from '@tippyjs/react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import 'tippy.js/dist/tippy.css'
import { tech } from '../../data'
import { Flip, Bounce } from 'react-reveal'
const category = [ ...new Set(tech.map((item) => item.category))]
function Skill() {
    const [ items, setItems ] = useState([])
    const filtered = (category) => {
        const newItem = tech.filter((item) => item.category === category)
        console.log(newItem)
        setItems(newItem)
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
                        <Icon> <FaAngleDoubleLeft /> </Icon>
                        <Small>Click me</Small>
                    </Click>
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