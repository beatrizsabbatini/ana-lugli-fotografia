import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../../services/githubUsers";
import UsersListItem from "./components/UsersListItem";
import {
  Background,
  Body,
  ErrorMessage,
  Header,
  Input,
  InputAndButtonContainer,
  SearchContainer,
  Title,
} from "./styles";

function Home() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function searchUsers() {
    api({
      method: "get",
      url: `/users?q=${inputValue}`,
      responseType: "json",
    }).then(function (response) {
      setUsers(response.data.items);
    });
  }

  function handleButtonPress() {
    if (inputValue.length === 0) {
      setErrorMessage("Digite pelo menos 3 caracteres para buscar!");
    } else if (inputValue.length < 3) {
      setErrorMessage("Digite pelo menos 3 caracteres para buscar!");
    } else {
      setErrorMessage(null);
      searchUsers();
    }
  }

  function logout() {
    localStorage.clear();
    history.push("/ana-lugli-fotografia/Login");
  }
  const user = localStorage.getItem("email");

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
