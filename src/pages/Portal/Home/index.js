import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginClear } from "../../../store/ducks/login";

import {
  Background,
  Body,

} from "./styles";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  function logout() {
    dispatch(loginClear());
    localStorage.clear();
    history.push("/ana-lugli-fotografia/Login");
  }


  return (
    <Background>
      <Body>
      <Button type="primary" style={{ margin: 30 }} onClick={() => logout()}>
        sair
      </Button>
      </Body>
    </Background>
  );
}

export default Home;
