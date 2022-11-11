import styled from "styled-components";
import { ColorBtn, ColorBtnSecond, ColorBtnThird } from "../../styles/globals";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { UseForm } from "../../hooks/useForm";
import { initialForm, validationsForm } from "../../validations/login";
import { signIn } from "../../services/auth";
import ContentFormLogin from "./contentFormLogin";
import LoadingAndResponse from "../dynamic/loadingAndResponse";
const Container = styled.form``;

const Form = () => {
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm(initialForm, validationsForm, signIn);

  const navigate = useNavigate();

  let dataBtn = [
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
    {
      onclick: () => {
        navigate(`/recuperateAccount`);
      },
      color: ColorBtnThird,
      text: "recuperar cuenta",
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

  useEffect(() => {
    if (msg === "El proceso fue exitoso") {
      navigate("/home");
    }
  }, [msg]);

  return (
    <Container>
      {dataForm.map((v, i) => (
        <ContentFormLogin key={i} v={v} handleChange={handleChange} />
      ))}
      {dataBtn.map((v, i) => (
        <Button key={i} {...v} />
      ))}
      <LoadingAndResponse loading={loading} msg={msg} response={response} />
    </Container>
  );
};

export default Form;
