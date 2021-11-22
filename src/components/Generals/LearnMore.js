import React from 'react';
import styled from 'styled-components'

const LearnMoo = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #00ADEE;
` 

export default function LearnMore({children}) {
  return (
    <a href="/learn-more"><LearnMoo>{children}</LearnMoo></a>
  )
}
