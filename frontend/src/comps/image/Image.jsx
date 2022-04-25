import React from 'react';
import {ImageContainer, Img } from './image.style'
function Image(props ) {
  return (
 
<ImageContainer>
    <Img  src={props.image} alt='slide-image'/>
</ImageContainer>
  );
}

export default Image;
