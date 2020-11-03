import React from "react";

import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { loginClear } from "../../../store/ducks/login";
import EditBannerSection from "./components/EditBannerSection";

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
      <Button type="primary" style={{ margin: 30, marginLeft: 100, backgroundColor: 'transparent', borderWidth: 0 }} onClick={() => logout()}>
        Sair da plataforma
      </Button>
      <Body>
      <EditBannerSection />
      </Body>
    </Background>
  );
}

export default Home;
