import styled from "styled-components";
import { ColorBtn, ColorBtnSecond } from "@/global/styles/globals";
import Button from "./button";
import { initialForm, validationsForm } from "@/public/login/validations/register";
import { signUp } from "../services/auth";
import ContentFormRegister from "./contentFormRegister";
import LoadingAndResponse from "@/global/components/toast/loadAndResponse";
import { useState } from "react";
import ShowPassword from "@/public/login/icons/eye";
import NoShowPassword from "../icons/noShowPassword";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/global/context/languageContext";
import { FormRegister } from "@/public/login/interfaces/formAuth";
import { useNavigate } from "react-router-dom";
import { ContainerBtn, ContainerSocialMedia } from "../styles";


const Container = styled.form`

`;

interface V {
  label: string;
  name: string;
  value: string;
  errors: string;
  placeHolder: string;
  type: string;
}

interface Params{
  toggleRA: () => void
}

const FormRegisterCom = ({toggleRA}:Params) => {
  const { text } = useLanguage();
  const navigate = useNavigate();
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm<FormRegister>(initialForm, validationsForm, signUp);

  const [showPassword, setShowPassword] = useState(false);

  let dataBtn = [
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: text.loginBtnCreateAccount,
    },
    {
      onclick: () => navigate(-1),
      color: ColorBtn,
      text: text.loginBtnRedirectLogin,
    }
  ];

  let dataForm: V[] = [
    {
      label: text.registerLabelGmail,
      name: "email",
      value: form.email,
      errors: errors.email,
      placeHolder: "user@gmail.com",
      type: "text",
    },
    {
      label: text.registerLabelNameUser,
      name: "username",
      value: form.username,
      errors: errors.username,
      placeHolder: "user54",
      type: "text",
    },
    {
      label: text.registerLabelCellphone,
      name: "numberPhone",
      value: form.numberPhone,
      errors: errors.numberPhone,
      placeHolder: "59165722183",
      type: "text",
    },
    {
      label: text.registerLabelPassword,
      name: "password",
      value: form.password,
      errors: errors.password,
      placeHolder: "Contraseña",
      type: showPassword ? "text" : "password",
    },
  ];

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  function showIconEye() {
    if (showPassword) {
      return <NoShowPassword />;
    }
    return <ShowPassword />;
  }

  function showDataFor(i: number, v: V) {
    return (
      <ContentFormRegister
        key={i}
        v={v}
        handleChange={handleChange}
        EyeJSX={showIconEye}
        handleShowPass={handleShowPass}
      />
    );
  }

  return (
    <Container>
      {dataForm.map((v, i) => showDataFor(i, v))}
      <ContainerBtn>
      {dataBtn.map((v, i) => (
        <Button key={i} {...v} />
      ))}
      </ContainerBtn>

      <ContainerSocialMedia>
        <p onClick={toggleRA}>{text.loginBtnRecuperateAccount}</p>
      </ContainerSocialMedia>

      <LoadingAndResponse loading={loading} msg={msg} response={response} />
    </Container>
  );
};

export default FormRegisterCom;
