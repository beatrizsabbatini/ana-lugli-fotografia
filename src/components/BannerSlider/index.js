import React from 'react'

import { Carousel } from 'react-bootstrap';

import Slide1 from '../../assets/neon3.jpg';
import Slide2 from '../../assets/ensaio.jpg';
import Slide3 from '../../assets/aniversario.jpg';
import Slide4 from '../../assets/formatura.jpg';
import { BannerSlide } from './styles';

export default function BannerSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <BannerSlide
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerSlide
          src={Slide2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerSlide
          src={Slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerSlide
          src={Slide4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
   </Carousel>
  )
}
