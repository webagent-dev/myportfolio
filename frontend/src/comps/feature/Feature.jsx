import React from 'react'
import { FeatureContainer, Wrapper, Card, Image, Cardcontent, Title, Text } from './feature.style'
import { Zoom } from 'react-reveal'
import { card } from '../../data' 
function Feature() {
  return (
    <FeatureContainer>
        <Wrapper>
               <Zoom left >
    {
      card.map((item, i) => 
      (
         <Card key={i}>
            <Image src={item.img} alt='card_pic' />
            <Cardcontent>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
            </Cardcontent>
    </Card>
      )
      )
    }
      </Zoom>
        </Wrapper>
    </FeatureContainer>
  )
}

export default Feature