import styled from "styled-components";

import {
  ColorBtn,
  Input,
  Label,
  ColorBtnSecond,
  ColorText,
  ErrorCss,
} from "../../styles/globals";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { UseForm } from "../../hooks/form/useFormLogin";
import { FormLogin } from "../../interface/formAuth";
import Loader from "../loader";
import Message from "../message";
import { ToastContext } from "../../context/toast";

const Container = styled.form``;

const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form: FormLogin) => {
  let errors = {} as FormLogin;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }
  if (!form.password.trim()) {
    errors.password = "El campo 'contraseña a tratar' es requerido";
  }
  return errors;
};

const Form = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validationsForm);
  const { toast } = useContext(ToastContext);

  const navigate = useNavigate();

  let data = [
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: "Ingresar",
    },
    {
      onclick: () => {
        navigate(`/register`);
      },
      color: ColorBtn,
      text: "Create una cuenta",
    },
  ];
  let dataForm = [
    {
      label: "Gmail",
      name: "email",
      value: form.email,
      errors: errors.email,
    },
    {
      label: "Contraseña",
      name: "password",
      value: form.password,
      errors: errors.password,
    },
  ];
  return (
    <Container>
      {dataForm.map((v, i) => (
        <div key={i}>
          <Label colorText={ColorText}>{v.label}</Label>
          <Input
            type="text"
            name={v.name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={v.value}
            required
          />
          {v.errors && <ErrorCss>{v.errors}</ErrorCss>}
        </div>
      ))}

      {data.map((v, i) => (
        <Button key={i} {...v} />
      ))}
      {loading && <Loader />}
      {response && <Message msg={toast} />}
    </Container>
  );
};

export default Form;
