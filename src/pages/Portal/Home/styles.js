import styled from "styled-components";

export const Body = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  padding: 30px 0 30px 100px;
  
`;

export const Background = styled.div`
  background-color: #212121;
  margin: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  min-width: 100vw;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 200;
  padding-top: 10px;
`;


export const Input = styled.input`
  height: 35px;
`;

export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
