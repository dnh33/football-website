import React from 'react'
import styled from 'styled-components'
import './GetUp.scss'

const GetUpBlock = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 30.1875rem;
  margin: 0 auto;
`

const GetUpTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  color: #333333;
  text-transform: capitalize;
`


export default function GetUpWithYourTeam() {
  return (
    <GetUpBlock className="tiger">
      <div className="getUp">

        <div className="getUp__txts">
          
          <GetUpTitle>get up close with your team</GetUpTitle>

          <p className="getUp__txts--breadtxt">
            If you’re interested in the scores of more than one team (it’s OK, we won’t
            <br />
            tell your mates you support two clubs!), you can choose the scores and
            <br />
            competitions that matter to you using the ‘My Scores’ section. So, make sure
            <br />
            you’re a top-flight football fan by downloading the Football Score Centre
            <br />
            now. It’s got all this:
          </p>
          <div className="getUp__txts--link">
          <a href="/apple"><img src="./apple_btn.svg" alt="apple download button" /></a>
          <a href="/google" className="l-margin"><img src="./google_btn.svg" alt="google download button" /></a>
          </div>
        </div>
      </div>
    </GetUpBlock>
  )
}
