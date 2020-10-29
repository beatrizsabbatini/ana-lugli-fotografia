import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  box-sizing: border-box
}

body{
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 1px
  font-family: 'Roboto', sans-serif;
}

`

export default GlobalStyle;