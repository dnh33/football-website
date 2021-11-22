import React from 'react'
import styled from 'styled-components'
import WelcomeSCR from '../components/WelcomeSCR/Welcome'
import WhatItDo from '../components/WhatDoesItDo/WhatItDo'
import GetStarted from '../components/GetStarted/GetStarted'
import Features from '../components/Features/Features'
import TwitterCarousel from '../components/Carousel/Carousel'
import Featured from '../components/FeaturedIn/Featured'
import GetUpWithYourTeam from '../components/GetUp/GetUp'
import Footer from '../components/Footer/Footer'

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%
  height: auto;
`

export default function Landingpage() {
  return (
    <Wrapper>
      <WelcomeSCR />
      <WhatItDo />
      <GetStarted />
      <Features />
      <TwitterCarousel />
      <Featured />
      <GetUpWithYourTeam />
      <Footer />
    </Wrapper>
  )
}
