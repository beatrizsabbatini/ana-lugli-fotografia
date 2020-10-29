import React from 'react'

import { Container, 
         Card, 
         Picture, 
         MessageContainer, 
         Title, 
         TitleContainer,
         Description, 
         Line,
         Quote
        } from './styles'
import Ana from '../../../../assets/ana.jpg';

export default function Contact() {
  return (
    <Container>
      <Card>
     
          <Picture src={Ana}/>
        
        <MessageContainer>
          <TitleContainer>
            <Title>Prazer! Me chamo Ana Lugli</Title>
            <Line />
          </TitleContainer>
         
          <Description>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting lorem Ipsum is simply dummy text of the 
            printing and typesetting Lorem Ipsum is simply dummy 
            text of the printing and typesetting Lorem Ipsum is simply 
            Lorem Ipsum is simply dummy
          </Description>
         
        </MessageContainer>
      </Card>
    </Container>
  )
}
