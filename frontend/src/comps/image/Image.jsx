import React from 'react';
import {ImageContainer, Img } from './image.style'
import { Fade } from 'react-reveal'
function Image(props ) {
  return (
 
<ImageContainer>
    <Img  src={props.image} alt='slide-image'/>
</ImageContainer>
  );
}

export default Image;
