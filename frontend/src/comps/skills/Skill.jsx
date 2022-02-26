import React, { useState } from 'react'
import { Container, Wrapper, BtnWrapper, Btn, ImageWrapper, MainContainer, Content,  Image, 
Title, Desc, Name, Click, Small,Icon} from './skill.style'
import Tippy from '@tippyjs/react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import 'tippy.js/dist/tippy.css'
import { tech } from '../../data'
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
                    <Click>
                        <Icon> <FaAngleDoubleLeft /> </Icon>
                        <Small>Click me</Small>
                    </Click>
                    </>
                : 
                items?.map((item) => { 
                    return (
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
               </>
                    )
                })
            }
        </MainContainer>
    </Wrapper>
    </Container>
  )
}

export default Skill