import React from 'react'

import { Carousel } from 'react-bootstrap';

import { BannerSlide, SmallText, BigText, TitleContainer } from './styles';

export default function BannerSlider({items}) {
  return (
    <>
      <TitleContainer>
        <SmallText>meus</SmallText>
        <BigText>Destaques</BigText>
      </TitleContainer>
      {items && (
        <Carousel>
        {items.map(item => {
          return (
           <Carousel.Item key={item._id}>
           <BannerSlide
             src={`https://backend-ana-lugli-fotografia.herokuapp.com/files/${item.image}`}
             alt="slide"
           />
           <Carousel.Caption>
             <h3>{item.title}</h3>
           </Carousel.Caption>
         </Carousel.Item>
          )
        })}
     </Carousel>
      )}
      
   </>
  )
}
