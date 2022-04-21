import React from 'react'
import styled from 'styled-components'
const Red = styled.p`
    color: red;
`
function Error(props) {
  return (
    <Red>{props.children}</Red>
  )
}

export default Error