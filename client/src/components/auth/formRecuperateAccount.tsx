import styled from "styled-components";

import {
  ColorBtn,
  Input,
  Label,
  ColorBtnSecond,
  ColorText,
  ErrorCss,
} from "../../styles/globals";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { UseForm } from "../../hooks/form/useFormRecuperateAccount";
import Loader from "../loader";
import Message from "../message";
import { ToastContext } from "../../context/toast";
import { initialForm, validationsForm } from "../../validations/recuperateAccount";

const Container = styled.form``;

const Form = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validationsForm);
  const { toast } = useContext(ToastContext);

  const navigate = useNavigate();

  let data = [
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
    }
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
    },  {
      label: "Clave secreta",
      name: "secrect_password",
      value: form.secrect_password,
      errors: errors.secrect_password,
    },
  ];
  return (
    <Container>
      {dataForm.map((v, i) => (
        <div key={i}>
          <Label colorText={ColorText}>{v.label}</Label>
          <Input
            type="text"
            name={v.name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={v.value}
            required
          />
          {v.errors && <ErrorCss>{v.errors}</ErrorCss>}
        </div>
      ))}

      {data.map((v, i) => (
        <Button key={i} {...v} />
      ))}
      {loading && <Loader />}
      {response && <Message msg={toast} />}
    </Container>
  );
};

export default Form;
