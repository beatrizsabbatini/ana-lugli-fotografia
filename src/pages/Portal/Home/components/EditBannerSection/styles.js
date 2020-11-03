import { Button } from "react-bootstrap";

import styled from "styled-components";

export const BannerItemsContainer = styled.div`
display: flex;
flex-direction: row;
`
export const ImageContainer = styled.div`
margin: 20px 20px 20px 0;
position: relative;

`

export const EditMessage = styled.p`
color: transparent;
position: absolute;
top: 0;
left: 0;
padding-top: 5%;
padding-left: 10%;
display: flex;
flex: 1;
height: 100%;
width: 100%;

:hover{
  color: #d2d2d2;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.72);
}
`

export const RowContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`

export const StyledButton = styled(Button)`
margin-right: 20px;
`


export const Separator = styled.hr`
height: 0.5px;
background-color: white;
width: 86vw;
margin: 30px 0 30px 0;  
`
