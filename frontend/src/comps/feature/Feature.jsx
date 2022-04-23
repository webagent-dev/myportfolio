import React from 'react'
import { FeatureContainer, FeatureGrid, Card, Image, Cardcontent, Title, Text, Main } from './feature.style'
import { Zoom } from 'react-reveal'
import axios from 'axios'
import { useQuery } from 'react-query'
import './feature.css'
function Feature() {
  const { isLoading, isFetching, data } = useQuery('get_card', () => {
    return axios.get('http://localhost:5000/card')
  })
  if(isLoading || isFetching ){
    return <h1>Loading...</h1>
  }
  return (
    <Main>
    <FeatureContainer>
        <FeatureGrid>
               <Zoom left >
    {
      data?.data.map((item) => 
      (
        <div className="wrapper">
         <Card key={item.id} className='stacked'>
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