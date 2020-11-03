import React, { useState } from "react";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";

import { FormContainer, FormButton, RegisterButton } from "./styles";
import { loginRequest } from "../../../../../store/ducks/login";
import { useEffect } from "react";

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { errors, loading, token } = useSelector(state => state.login);

  const [errorMessage, setErrorMessage] = useState();
  const [alertType, setAlertType] = useState("");
  const [show, setShow] = useState(false);
  const [values, setValues] = useState();

  const schema = yup.object({
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Preencha um email válido!"),
    password: yup.string().required("Este campo é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const userValues = {
        email: values.email,
        password: values.password
      }

      setValues(userValues);

      dispatch(loginRequest(userValues))
      
    },
  });

  useEffect(() => {
    if (values){
      if (loading == false && errors){
        console.log('deu erro')
        setAlertType("danger");
        setShow(true);
      } else {
    
        if (loading == false && token){
          console.log('nao deu erro')
          localStorage.setItem("token", token);
          localStorage.setItem("email", values.email);
          history.push("/ana-lugli-fotografia/Portal");
          setAlertType("success");
          setShow(false);
        } 
      }
    }
  }, [values, errors,loading, token])

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormContainer>
          <div>
            <Form.Group controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="password"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  isInvalid={!!formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10,
              paddingBottom: 30,
            }}
          >
            <Form.Group
              controlId="validationFormikPassword"
              style={{ width: "100%" }}
            >
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="Senha"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                isInvalid={!!formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormButton type="submit">
              Entrar
            </FormButton>
            <RegisterButton
              type="button"
              onClick={() => history.push("/ana-lugli-fotografia/Cadastro")}
              variant="outline-primary"
            >
              Cadastre-se
            </RegisterButton>
          </div>
        </FormContainer>
      </Form>
      {show && (
        <Alert
          variant={alertType}
          dismissible
          show={show}
          onClose={() => {
            setShow(false);
            setErrorMessage(null);
          }}
        >
          <Alert.Heading>
            {errorMessage !== null ? "Erro" : "Sucesso"}
          </Alert.Heading>
          {errorMessage !== null && "Não foi possível concluir o login!"}
          {errorMessage !== null && (
            <>
              <hr />
              {errorMessage !== null && errorMessage}
            </>
          )}
        </Alert>
      )}
    </>
  );
}

export default LoginForm;
