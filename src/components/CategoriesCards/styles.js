import styled from "styled-components";

export const CategoryTitle = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

font-size: 20px;
color: #B27272;
font-family: 'Roboto', sans-serif;
font-weight: bold;
text-align: end;
`
export const Line = styled.div`
height: 2px;
background-color: #B27272;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
width: 70%;
margin: 0 auto;
margin-bottom: -70px;
`
export const Container = styled.div`
padding: 20px;
`

export const Label = styled.label`
background-image:  url(${props => props.url});
background-size: 100% 100%;
object-fit: cover;
background-repeat: no-repeat;
background-color: #fff
`