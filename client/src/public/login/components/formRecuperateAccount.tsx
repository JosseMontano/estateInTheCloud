import styled from "styled-components";
import { ColorBtnSecond, ColorBtn } from "@/global/styles/globals";
import Button from "./button";
import {
  initialForm,
  validationsForm,
} from "@/public/login/validations/recuperateAccount";
import ContentFormRecuperateAccount from "./contentFormRecuperateAccount";
import LoadingAndResponse from "@/global/components/toast/loadAndResponse";
import { FormRecuperateAccount } from "@/public/login/interfaces/formAuth";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/global/context/languageContext";
import { sendCodeGmail } from "../services/auth";
import Event from "@/global/interfaces/event";
import { recuperateAccount } from "../services/auth";
import { useState } from "react";

const Container = styled.form`
  padding: 15px;
  width: 380px;
  @media screen and (max-width: 455px) {
    width: 250px;
  }
`;

const FormRecuperate = () => {
  const { text } = useLanguage();
  const [changePassFlag, setChangePassFlag] = useState(false);
  const [changePassLoad, setChangePassLoad] = useState(false);
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm<FormRecuperateAccount>(initialForm, validationsForm, sendCodeGmail);

  const handleChangePassword = async (e: Event["buttonSend"]) => {
    e.preventDefault();
    setChangePassLoad(true);
    const res = await recuperateAccount(form);
    setTimeout(() => {
      setChangePassLoad(false);
    }, 2000);
    setChangePassFlag(true);
  };

  let dataBtn = [
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: text.recuperateAccountSendEmail,
    },
    {
      onclick: handleChangePassword,
      color: ColorBtn,
      text: text.recuperateAccountSave,
    },
  ];
  let dataForm = [
    {
      label: text.recuperateAccountGmail,
      name: "email",
      value: form.email,
      errors: errors.email,
    },
    {
      label: text.recuperateAccountPasswordNew,
      name: "password",
      value: form.password,
      errors: errors.password,
    },
    {
      label: text.recuperateAccountCodeGmail,
      name: "codeGmail",
      value: form.codeGmail,
      errors: errors.codeGmail,
    },
  ];
  return (
    <Container>
      {dataForm.map((v, i) => (
        <ContentFormRecuperateAccount
          key={i}
          v={v}
          handleChange={handleChange}
        />
      ))}
      {dataBtn.map((v, i) => (
        <Button key={i} {...v} />
      ))}
      <LoadingAndResponse loading={loading} msg={msg} response={response} />
      <LoadingAndResponse
        loading={changePassLoad}
        msg={"Ha ocurrido un error"}
        response={changePassFlag}
      />
    </Container>
  );
};

export default FormRecuperate;
