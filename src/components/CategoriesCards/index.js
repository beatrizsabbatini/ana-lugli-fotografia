import React, {useEffect, useState} from 'react';

import './styles.css';
import { CategoryTitle, TitleContainer, Line, Container, Label } from './styles';
import { categories } from '../../utils/Constants';

function CategoriesCards() {
  const [firstChecked, setFirstChecked] = useState(true);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [fourthChecked, setFourthChecked] = useState(false);
  const [fifthChecked, setFifthChecked] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(categories[0].title)
  }, [])

  function resetFields(){
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(false);
    setFourthChecked(false);
    setFifthChecked(false);
  }

  return  (
    <Container>
      <TitleContainer>
        <CategoryTitle>{currentTheme}</CategoryTitle>
        <Line />
      </TitleContainer>
      <section id="slider">
        <input type="radio" name="slider" id="s1" checked={firstChecked} onClick={() => {
          resetFields();
          setCurrentTheme(categories[0].title);
          setFirstChecked(true);
        }}/>
        <input type="radio" name="slider" id="s2" checked={secondChecked} onClick={() => {
          resetFields();
          setCurrentTheme(categories[1].title);
          setSecondChecked(true);
        }}/>
        <input type="radio" name="slider" id="s3" checked={thirdChecked} onClick={() => {
          resetFields();
          setCurrentTheme(categories[2].title);
          setThirdChecked(true);
        }}/>
        <input type="radio" name="slider" id="s4" checked={fourthChecked} onClick={() => {
          resetFields();
          setCurrentTheme(categories[3].title);
          setFourthChecked(true);
        }}/>
        <input type="radio" name="slider" id="s5" checked={fifthChecked} onClick={() => {
          resetFields();
          setCurrentTheme(categories[4].title);
          setFifthChecked(true);
        }}/>

        <Label for="s1" id="slide1" url={categories[0].url}/>
        <Label for="s2" id="slide2" url={categories[1].url}/>
        <Label for="s3" id="slide3" url={categories[2].url}/>
        <Label for="s4" id="slide4" url={categories[3].url}/>
        <Label for="s5" id="slide5" url={categories[4].url}/>
    </section>
  </Container>
  )
}

export default CategoriesCards;
