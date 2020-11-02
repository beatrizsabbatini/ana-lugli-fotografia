import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import {
  Background,
  Body,

} from "./styles";

function Home() {
  const history = useHistory();

  function logout() {
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
