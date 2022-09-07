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
import { UseForm } from "../../hooks/form/useFormRegister";
import { FormRegister } from "../../interface/formAuth";
import Loader from "../loader";
import Message from "../message";
import { ToastContext } from "../../context/toast";

const Container = styled.form``;

const initialForm = {
  email: "",
  username: "",
  password: "",
};

const validationsForm = (form: FormRegister) => {
  let errors = {} as FormRegister;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }
  if (!form.username.trim()) {
    errors.username = "El campo 'Nombre de usuario' es requerido";
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
      text: "Crear cuenta",
    },
    {
      onclick: () => {
        navigate(`/`);
      },
      color: ColorBtn,
      text: "Volver",
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
      label: "Nombre de usuario",
      name: "username",
      value: form.username,
      errors: errors.username,
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

/* 

  <Label colorText={ColorText}>Gmail</Label>
      <Input type="text" onChange={(e) => setEmail(e.target.value)} />
      <Label colorText={ColorText}>Nombre de usuario</Label>
      <Input type="text" onChange={(e) => setuserName(e.target.value)} />
      <Label colorText={ColorText}>Contraseña</Label>
      <Input type="text" onChange={(e) => setPassword(e.target.value)} />

*/
