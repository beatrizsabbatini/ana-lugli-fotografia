import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex: 1;
min-height: 100vh;
width: 100vw;
justify-content: center;
align-items: center;
background-color: #EBEBEB;
`

export const Card = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding: 80px 0 80px 0;
width: 70%;
background-color: #FBFBFB;
-webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.08); 
box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.08);
border-radius: 10px;
`

export const Picture = styled.img`
 border-radius: 50%;
 height: 300px;
 width: 300px;
 object-fit: cover;
 border-color: #5A5959;
 border-width: 2px;
 border-style: solid;
 padding: 10px;

`

export const MessageContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
`

export const Title = styled.h2`
 text-align: center;
 margin: 0 0 5px 0;
 color: #5A5959;
 font-size: 40px;
`

export const Description = styled.p`
 text-align: center;
 margin: 30px 0 0 0;
 color: #5A5959;
font-size: 20px;
`
export const Line = styled.div`
display: flex;
height: 2px;
background-color: #201A1A;
color: #5A5959;
margin: 0 0 30px 0;
width: 80%;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
