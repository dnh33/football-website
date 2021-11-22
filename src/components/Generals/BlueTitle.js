import React from 'react';
import styled from 'styled-components'

const BlueTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 30px;
  color: #00ADEE;
  text-transform: uppercase;
` 

export default function BlueTitles({children}) {
  return (
    <BlueTitle>{children}</BlueTitle>  
  )
}
