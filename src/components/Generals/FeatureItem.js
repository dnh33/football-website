import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  width: 100%;
  max-width: 19.4375rem;
  height: 6.125rem;
`
const FeatureTxt = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #FFF;
` 

export default function FeatureItem({children, source}) {
  return (
    <Item>
      <img src={source} alt="Example" className="flexContainer__image" />
      <FeatureTxt>&bull; {children}</FeatureTxt>
    </Item>
  )
}
