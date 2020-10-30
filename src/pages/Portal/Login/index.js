import React from "react";

import LoginForm from "./components/LoginForm";
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { Background } from "./styles";

export default function Register() {
  return (
    <Background>
      <Logo fill="#7D3C3C" width={200} height={200} />
      <LoginForm />
    </Background>
  );
}
