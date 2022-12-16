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
const Container = styled.form``;

const Form = () => {
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
      text: "Guardar",
    },
    {
      onclick: () => {
        navigate(`/register`);
      },
      color: ColorBtn,
      text: "Create una cuenta",
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
      label: "Contraseña Nueva",
      name: "password",
      value: form.password,
      errors: errors.password,
    },
    {
      label: "Clave secreta",
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
