import React from 'react'
import styled from 'styled-components'
import BlackTitles from '../Generals/BlackTitle'
import BlueTitles from '../Generals/BlueTitle'
import LearnMore from '../Generals/LearnMore'
import SampleTxts from '../Generals/SampleTxt'
import './WhatItDo.scss'

const WhatItDoesBlock = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 37rem;
  margin: 0 auto;
`

export default function WhatItDo() {
  return (
    <WhatItDoesBlock className="giraffe">
      <div className="whatContainer">
        <BlueTitles>what it does</BlueTitles>
        <BlackTitles>an enchanced football experience</BlackTitles>
        <div className="whatContainer--txt">
          <SampleTxts className="whatContainer--txt">
          <span className="capitalize">the guardian live scores</span> app is your go to app for live scores and watching <span className="capitalize">premier league</span> goals… <span className="capitalize">get</span> in there, what a result!
          <br />
          <br />
          <span className="capitalize">as</span> well as videos of all the goals, you can watch match highlights, check out the latest scores and results and stay bang-up-to-date with the big football stories from <span className="capitalize">the guardian</span> publication.
          </SampleTxts>
        </div>
        <div className="whatContainer--learn">
          <LearnMore><span className="capitalize">learn</span> more</LearnMore>
        </div>
      </div>
    </WhatItDoesBlock>
  )
}
