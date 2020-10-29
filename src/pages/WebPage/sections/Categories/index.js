import React from 'react'

import { 
  BackgroundContainer, 
  SectionTitle, 
  TitleContainer, 
  Strong,
  TitleDecoration,
  ButtonText,
  ButtonSeeAllCategories
} from './styles';
import CategoriesCards from '../../../../components/CategoriesCards';
import DecorationLine from '../../../../assets/decoration-line.svg';

export default function Categories() {
  return (
    <BackgroundContainer>
      <TitleContainer>
        <TitleDecoration src={DecorationLine} alt="" />
        <div>
          <SectionTitle>Conheça o meu</SectionTitle>
          <Strong>Portfólio</Strong>
        </div>
      </TitleContainer>
      <CategoriesCards />
      {/* <ButtonSeeAllCategories>
        <ButtonText>Veja todas as categorias</ButtonText>
      </ButtonSeeAllCategories> */}
    </BackgroundContainer>
  )
}
