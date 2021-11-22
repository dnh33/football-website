import React from 'react'
import styled from 'styled-components'
import './Footer.scss'


const Foobar = styled.footer`
  width: 100%;
  max-width: 90rem;
  height: 7.9375rem;
  margin: 0 auto;
  background-color: #00ADEE;
`

export default function Footer() {
  return (
    <Foobar className="footer">
      <div className="footer__content">
        <div className="footer__content--logo">
          <img src="./WHITE.svg" alt="app logo" />
        </div>

        <div className="footer__content--links">
          <a href="/download">Download</a>
          <a href="/support">Support</a>
          <a href="/devs">Developers</a>
          <a href="/privacy-policy">Privacy</a>
        </div>

        <div className="footer__content--SoMe">
          <a href="/twatter"><img src="./icons/twatter_some.svg" alt="twitter logo" /></a>
          <a href="/facebook"><img src="./icons/facebook_some.svg" alt="twitter logo" /></a>
          <a href="/instagram"><img src="./icons/instagram_some.svg" alt="twitter logo" /></a>
        </div>
      </div>
    </Foobar>
  )
}
