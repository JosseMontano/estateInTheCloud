import styled from "styled-components";
import { ColorBtn, ColorBtnSecond } from "@/styles/globals";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { UseForm } from "@/hooks/useForm";
import Loader from "../global/loading";
import Message from "../global/message";
import { initialForm, validationsForm } from "@/validations/register";
import { signUp } from "@/services/auth";
import ContentFormRegister from "./contentFormRegister";
import LoadingAndResponse from "../dynamic/loadingAndResponse";

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
      placeHolder: "user@gmail.com",
    },
    {
      label: "Nombre de usuario",
      name: "username",
      value: form.username,
      errors: errors.username,
      placeHolder: "user54",
    },
    {
      label: "Celular",
      name: "numberPhone",
      value: form.numberPhone,
      errors: errors.numberPhone,
      placeHolder: "59165722183",
    },
    {
      label: "Contraseña",
      name: "password",
      value: form.password,
      errors: errors.password,
      placeHolder: "Contraseña",
    },
    {
      label: "clave Secreta",
      name: "secrect_password",
      value: form.secrect_password,
      errors: errors.secrect_password,
      placeHolder: "clave Secreta",
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

      <LoadingAndResponse loading={loading} msg={msg} response={response} />
    </Container>
  );
};

export default Form;
