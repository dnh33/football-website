import React from 'react'
import styled from 'styled-components'

const FeaturedBlock = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 17.375rem;
  margin: 0 auto;
  background-color: #FAFAFA;
`

const FeaturedTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  color: #333333;
  text-align: center;
  padding-top: 4.25rem;
  padding-bottom: 3.9375rem;
`

const Logos = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 3em;
`

export default function Featured() {
  return (
    <FeaturedBlock className="cameleon">
      <FeaturedTitle><span className="capitalize">we</span> have been featured in</FeaturedTitle>
      <Logos>
        <img src="./img/sportstv.svg" alt="sports tv logo" />
        <img src="./img/sports.svg" alt="sports logo" />
        <img src="./img/nbc.svg" alt="nbc sports logo" />
        <img src="./img/designer.svg" alt="designer technologies logo" />
        <img src="./img/dn.svg" alt="dn logo" />
        <img src="./img/skysports.svg" alt="sports tv logo" />
      </Logos>
    </FeaturedBlock>
  )
}
