import React from 'react';
import { TextContainer, Head, P } from './text.style'
function Text(props) {
  return (
      <TextContainer>
<Head>{props.title}</Head>
<P>{props.text}</P>
<P>{props.desc}</P>
<P>{props.other}</P>
      </TextContainer>
  )
}

export default Text;
