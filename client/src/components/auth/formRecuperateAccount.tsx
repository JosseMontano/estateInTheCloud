import styled from "styled-components";
import { ColorBtn, ColorBtnSecond } from "@/styles/globals";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { initialForm, validationsForm } from "@/validations/recuperateAccount";
import { recuperateAccount } from "@/services/auth";
import ContentFormRecuperateAccount from "./contentFormRecuperateAccount";
import LoadingAndResponse from "../dynamic/loadingAndResponse";
import { FormRecuperateAccount } from "@/interface/formAuth";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/context/languageContext";
import { startTransition } from "react";

const Container = styled.form``;

const Form = () => {
  const { text } = useLanguage();
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm<FormRecuperateAccount>(
      initialForm,
      validationsForm,
      recuperateAccount
    );

  const navigate = useNavigate();

  let dataBtn = [
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: text.recuperateAccountSave,
    },
    {
      onclick: () => {
        startTransition(() => {
          navigate(`/`);
        });
      },
      color: ColorBtn,
      text: text.recuperateAccountReturn,
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
      label: text.recuperateAccountSecretKey,
      name: "secrect_password",
      value: form.secrect_password,
      errors: errors.secrect_password,
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
    </Container>
  );
};

export default Form;
