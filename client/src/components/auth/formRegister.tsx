import styled from "styled-components";
import {  ColorBtnSecond } from "@/styles/globals";
import Button from "./button";
import { initialForm, validationsForm } from "@/validations/register";
import { signUp } from "@/services/auth";
import ContentFormRegister from "./contentFormRegister";
import LoadingAndResponse from "../dynamic/loadingAndResponse";
import { useState } from "react";
import ShowPassword from "@/icons/eye";
import NoShowPassword from "@/icons/noShowPassword";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/context/languageContext";
import { FormRegister } from "@/interfaces/formAuth";

const Container = styled.form`
padding: 15px;
min-width: 380px;
`;

interface V {
  label: string;
  name: string;
  value: string;
  errors: string;
  placeHolder: string;
  type: string;
}

const FormRegisterCom = () => {
  const { text } = useLanguage();
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm<FormRegister>(initialForm, validationsForm, signUp);

  const [showPassword, setShowPassword] = useState(false);

  let dataBtn = [
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: text.registerBtnCreateAccount,
    },
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

      {dataBtn.map((v, i) => (
        <Button key={i} {...v} />
      ))}

      <LoadingAndResponse loading={loading} msg={msg} response={response} />
    </Container>
  );
};

export default FormRegisterCom;
