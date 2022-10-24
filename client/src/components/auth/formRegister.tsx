import styled from "styled-components";
import { ColorBtn, ColorBtnSecond } from "../../styles/globals";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { UseForm } from "../../hooks/useForm";
import Loader from "../loader";
import Message from "../message";
import { initialForm, validationsForm } from "../../validations/register";
import { signUp } from "../../services/auth";
import ContentFormRegister from "./contentFormRegister";

const Container = styled.form``;

const Form = () => {
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm(initialForm, validationsForm, signUp);

  const navigate = useNavigate();

  let dataBtn = [
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
        <ContentFormRegister key={i} v={v} handleChange={handleChange} />
      ))}

      {dataBtn.map((v, i) => (
        <Button key={i} {...v} />
      ))}

      {loading && <Loader />}
      {response && <Message msg={msg} />}
    </Container>
  );
};

export default Form;
