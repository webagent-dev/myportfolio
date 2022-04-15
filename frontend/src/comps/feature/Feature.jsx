import React from 'react'
import { FeatureContainer, FeatureGrid, Card, Image, Cardcontent, Title, Text, Main } from './feature.style'
import { Zoom } from 'react-reveal'
import { card } from '../../data' 
import './feature.css'
function Feature() {
  return (
    <Main>
    <FeatureContainer>
        <FeatureGrid>
               <Zoom left >
    {
      card.map((item, i) => 
      (
        <div className="wrapper">
         <Card key={i} className='stacked'>
            <Image src={item.img} alt='card_pic' />
            <Cardcontent>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
            </Cardcontent>
    </Card>
    </div>
      )
      )
    }
      </Zoom>
        </FeatureGrid>
    </FeatureContainer>
    </Main>
  )
}

export default Feature