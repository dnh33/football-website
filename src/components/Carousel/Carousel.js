import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
/* import { Carousel } from 'react-responsive-carousel'; */
import Twitter from '../Twitter/Twitter_Card'
import './Carousel.scss'

const CarouselBlock = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 26.9375rem;
  margin: 0 auto;
  background-color: #FFF;
`

const GalleryTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  color: #333333;
  text-transform: capitalize;
  text-align: center;
  padding-top: 4.25rem;
  padding-bottom: 3.9375rem;
`

export default function TwitterCarousel() {
  return (
    <CarouselBlock className="cameleon">
      <GalleryTitle>What Our Users Say</GalleryTitle>
      <div className="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true, "autoPlay": true }'>
        <div className="gallery-cell"><Twitter /></div>
        <div className="gallery-cell"><Twitter /></div>
        <div className="gallery-cell"><Twitter /></div>
        <div className="gallery-cell"><Twitter /></div>
        <div className="gallery-cell"><Twitter /></div>
      </div>
    </CarouselBlock>
  )
}
