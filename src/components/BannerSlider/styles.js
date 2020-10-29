import styled from "styled-components";

export const BannerSlide = styled.img`
height: 100vh;
width: 100vw;
object-fit: cover;
z-index: 1;
`

export const SmallText = styled.h3`
font-size: 25px;
font-weight: 100;
color: #D9D8D8;
text-shadow: 2px 2px 4px rgba(152, 150, 150, 0.69);
margin-left: 2px;
`

export const BigText = styled.h3`
font-size: 70px;
font-weight: bold;
color: #D9D8D8;
text-shadow: 2px 2px 4px rgba(152, 150, 150, 0.69);
text-transform: uppercase;
line-height: 50px;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 20%;
left: 13%;
z-index: 2;
`