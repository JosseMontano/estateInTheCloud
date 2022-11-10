import styled from "styled-components";

import { ColorBtn, ColorBtnSecond } from "@/styles/globals";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { UseForm } from "@/hooks/useForm";
import Loader from "../global/loading";
import Message from "../global/message";
import {
  initialForm,
  validationsForm,
} from "../../validations/recuperateAccount";
import { recuperateAccount } from "../../services/auth";
import ContentFormRecuperateAccount from "./contentFormRecuperateAccount";

const Container = styled.form``;

const Form = () => {
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm(initialForm, validationsForm, recuperateAccount);

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
      {loading && <Loader />}
      {response && <Message msg={msg} />}
    </Container>
  );
};

export default Form;
