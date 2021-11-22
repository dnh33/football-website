import React from 'react';
import styled from 'styled-components'

const BlackTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  /* #333333 */
  color: #333333;
  text-transform: capitalize;
  margin-bottom: 27px;
` 

export default function BlackTitles({children}) {
  return (
    <BlackTitle>{children}</BlackTitle>  
  )
}
