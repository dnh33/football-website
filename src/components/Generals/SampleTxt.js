import React from 'react';
import styled from 'styled-components'

const SampleTxt = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  /* #4F4F4F */
  color: #4F4F4F;
` 

export default function SampleTxts({children}) {
  return (
    <SampleTxt>{children}</SampleTxt>  
  )
}
