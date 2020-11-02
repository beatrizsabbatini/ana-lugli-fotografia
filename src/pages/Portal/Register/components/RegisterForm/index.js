import React, { useState } from "react";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";

import { registerUserRequest } from "../../../../../store/ducks/register";
import { FormContainer } from "./styles";

function RegisterForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { errors, loading, registeredWithSuccess } = useSelector(state => state.register);

  const [errorMessage, setErrorMessage] = useState(null);
  const [alertType, setAlertType] = useState("");
  const [show, setShow] = useState(false);

  const schema = yup.object({
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Preencha um email válido!"),
    password: yup.string().required("Este campo é obrigatório"),
    confirmPassword: yup
      .string()
      .required("Este campo é obrigatório")
      .oneOf(
        [yup.ref("password"), null],
        "As senhas digitadas não são iguais!"
      ),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const userValues = {
        email: values.email,
        password: values.password
      }

      dispatch(registerUserRequest(userValues))

      if (loading == false && errors){
        setAlertType("danger");
        setShow(true);
      }
     
      if (loading == false && registeredWithSuccess){
        setAlertType("success");
        setShow(true);
      } 

    },
  });

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
              style={{ width: "49%" }}
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
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="validationFormikConfirmPassword"
              style={{ width: "49%" }}
            >
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirmar senha"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange("confirmPassword")}
                isInvalid={!!formik.errors.confirmPassword}
              />

              <Form.Control.Feedback style={{ marginLeft: 10 }} type="invalid">
                {formik.errors.confirmPassword}
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
            <Button type="submit" style={{ width: "49%" }}>
              Finalizar cadastro
            </Button>
            <Button
              style={{ backgroundColor: "grey", width: "49%", borderWidth: 0 }}
              type="button"
              onClick={() => history.push("/ana-lugli-fotografia/Login")}
            >
              Voltar ao Login
            </Button>
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
          {errorMessage !== null
            ? "Não foi possível concluir o cadastro!"
            : "Usuário cadastrado no sistema!"}
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

export default RegisterForm;
