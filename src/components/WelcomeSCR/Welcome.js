import React from 'react'
import styled from 'styled-components'
import "./Welcome.scss";

const WelcomeBlock = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 41.5625rem;
  margin: 0 auto;
`

export default function WelcomeSCR() {
  return (
    <WelcomeBlock className="whale">
      <div className="welcome">

        <div className="welcome__logo">
          <img src="./LOGO.svg" alt="sports logo" />
        </div>

        <div className="welcome__txts">
          <h1 className="welcome__txts--headline">
            Get a personalized football
            <br />
            experience tailored just for you
          </h1>

          <p className="welcome__txts--breadtxt">
            Achieve super-fan status by getting tailored updates and
            <br />
            up-to-the-minute information on your team
          </p>
          <div className="welcome__txts--link">
          <a href="/apple"><img src="./apple_btn.svg" alt="apple download button" /></a>
          <a href="/google" className="l-margin"><img src="./google_btn.svg" alt="google download button" /></a>
          </div>
        </div>
      </div>
    </WelcomeBlock>
  )
}
