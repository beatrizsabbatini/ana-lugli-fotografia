import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import LoginForm from "./components/LoginForm";
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { Background } from "./styles";
import { loginClear } from "../../../store/ducks/login";


export default function Register() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginClear());
  }, [])

  return (
    <Background>
      <Logo fill="#c96060" width={250} height={200} />
      <LoginForm />
    </Background>
  );
}
