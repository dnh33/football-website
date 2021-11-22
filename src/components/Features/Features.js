import React from 'react'
import styled from 'styled-components'
import FeatureItem from '../Generals/FeatureItem'
import './Features.scss'

const FeaturesBlock = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 45.9375rem;
  margin: 0 auto;
`
const FeaturesTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  color: #FFFFFF;
  text-transform: capitalize;
  text-align: center;
  padding-top: 76px;
` 

export default function Features() {
  return (
    <FeaturesBlock className="killerwhale">
        <FeaturesTitle>features that will tailor your experience</FeaturesTitle>
      <div className="featuresContainer">
          <FeatureItem source="/icons/1.svg" className="grid-item1">
            Video highlights for every Premier League and English Football League game
          </FeatureItem>
          <FeatureItem source="/icons/2.svg" className="grid-item2">
            Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian
          </FeatureItem>
          <FeatureItem source="/icons/3.svg" className="grid-item3">
            Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues
          </FeatureItem>
          <FeatureItem source="/icons/4.svg" className="grid-item4">
            Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action
          </FeatureItem>
          <FeatureItem source="/icons/5.svg" className="grid-item5">
            The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app – so you don’t need to miss any of the action
          </FeatureItem>
          <FeatureItem source="/icons/6.svg" className="grid-item6">
            Live updated league tables including all the domestic, European and major leagues and tournaments
          </FeatureItem>
          <FeatureItem source="/icons/7.svg" className="grid-item7">
            The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter
          </FeatureItem>
          <FeatureItem source="/icons/8.svg" className="grid-item8">
            Match reports, previews and a dedicated news section
          </FeatureItem>
          <FeatureItem source="/icons/9.svg" className="grid-item9">
          And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team
          </FeatureItem>
      </div>
    </FeaturesBlock>
  )
}
