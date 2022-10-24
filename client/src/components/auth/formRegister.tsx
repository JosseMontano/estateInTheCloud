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
import { UseForm } from "../../hooks/useForm";
import Loader from "../loader";
import Message from "../message";
import { ToastContext } from "../../context/toast";
import { initialForm, validationsForm } from "../../validations/register";
import { signUp } from "../../services/auth";

const Container = styled.form``;

const Form = () => {
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm(initialForm, validationsForm, signUp);
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
    {
      label: "clave Secreta",
      name: "secrect_password",
      value: form.secrect_password,
      errors: errors.secrect_password,
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
      {response && <Message msg={msg} />}
    </Container>
  );
};

export default Form;
