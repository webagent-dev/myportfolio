import React , {useState, useEffect, useCallback } from 'react';
import { Image, Text } from '../../one' 
import { slider } from '../../data'
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { SliderContainer, Sliders, Arrow} from './slider.style'
import axios from 'axios'
import { LightSpeed } from 'react-reveal'
 import { useQuery } from 'react-query'

function Slider() {
  const {isLoading, data, isFetching} = useQuery('get_slider',() => {
     return  axios.get('http://localhost:5000/slider')
  },{
      
  })
  const [index, setIndex ] = useState(0)
const handleSlider = useCallback((direction) => {
if(direction === 'left'){
  setIndex(index > 0 ? index - 1 : slider.length-1)
}else{
  setIndex(index < slider.length-1 ? index + 1 : 0)
}
},[index])

useEffect(() => {
  const getSlide = setInterval(() => {
      handleSlider('right')
  },5000)
  return () => clearInterval(getSlide)
},[handleSlider])
 if(isLoading || isFetching){
   return <h1>Loading...</h1>
 }
  return(
         <LightSpeed>    
<SliderContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               C
          <Arrow  onClick={() => handleSlider('left')} direction='left'><FaArrowLeft size='20px' /></Arrow>
          <Arrow onClick={() => handleSlider('right')} direction='right'>< FaArrowRight size='20px' /></Arrow>
          {
              data?.data.map((item) =>(       
            <Sliders key={item.id} index={index}>
                <Image  image={item.image}/>
              <Text title={item.title} text={item.text}/>
          </Sliders>    
              ))
          }
      </SliderContainer>
           </LightSpeed> 
  )
}

export default Slider;
