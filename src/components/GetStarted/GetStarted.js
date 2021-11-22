import React from 'react'
import styled from 'styled-components'
import BlackTitles from '../Generals/BlackTitle'
import BlueTitles from '../Generals/BlueTitle'
import LearnMore from '../Generals/LearnMore'
import SampleTxts from '../Generals/SampleTxt'
import './GetStarted.scss'

const GetStartedBlock = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 44.75rem;
  margin: 0 auto;
`

export default function GetStarted() {
  return (
    <GetStartedBlock className="panther">
      <div className="startContainer">
          <BlueTitles>get started</BlueTitles>
          <BlackTitles>user-friendly interface</BlackTitles>
        <div className="startContainer--txt">
          <SampleTxts>
            <span className="capitalize">the</span> in-game goal clips from every <span className="capitalize">premier league</span> match are
            <br />
            available to <span className="capitalize">guardian tv</span> customers with a <span className="capitalize">guardian</span> subscription.
            <br />
            <br />
            <span className="capitalize">so,</span> if you’re not a subscriber, now’s the time to make that savvy call.
            <br />
            <span className="capitalize">if</span> that’s a step too far for you, you can still watch loads of firecracker
            <br />
            <span className="capitalize">premier league</span> action as long as you sign in with a free <span className="capitalize">guardian</span> i<span className="capitalize">d</span>.
          </SampleTxts>
        </div>
        <div className="startContainer--learn">
          <LearnMore><span className="capitalize">learn</span> more</LearnMore>
        </div>
      </div>
    </GetStartedBlock>
  )
}
