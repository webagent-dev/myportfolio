import React from 'react'
import { FeatureContainer, Wrapper, Card, Image, Cardcontent, Title, Text } from './feature.style'
import { card } from '../../data' 
function Feature() {
  return (
    <FeatureContainer>
        <Wrapper>
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
        </Wrapper>
    </FeatureContainer>
  )
}

export default Feature