import styled from "styled-components";
import { ColorBtnSecond } from "@/styles/globals";
import Button from "./button";
import { initialForm, validationsForm } from "@/validations/recuperateAccount";
import ContentFormRecuperateAccount from "./contentFormRecuperateAccount";
import LoadingAndResponse from "../dynamic/loadingAndResponse";
import { FormRecuperateAccount } from "@/interface/formAuth";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/context/languageContext";
import { recuperateAccountGmail } from "@/services/user";

const Container = styled.form`
padding: 15px;
min-width: 380px;
`;

const FormRecuperate = () => {
  const { text } = useLanguage();
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm<FormRecuperateAccount>(
      initialForm,
      validationsForm,
      recuperateAccountGmail
    );

  let dataBtn = [
    /*     {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: text.recuperateAccountSave,
    }, */
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: "Correo",
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
      name: "subject",
      value: form.subject,
      errors: errors.password,
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

export default FormRecuperate;
