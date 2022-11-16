import Form from "../components/auth/formLogin";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import { useNavigate } from "react-router-dom";
import { UseForm } from "@/hooks/useForm";
import { initialForm, validationsForm } from "@/validations/login";
import { signIn } from "@/services/auth";
import { ColorBtn, ColorBtnSecond, ColorBtnThird } from "@/styles/globals";
export function Login(): JSX.Element {
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
  return (
    <LoginRegisterRecuperate
      content={
        <>
          <ColContent
            title={"Inicia sesion o create una cuenta"}
            text={"Hola de nuevo"}
            form={
              <Form
                dataBtn={dataBtn}
                dataForm={dataForm}
                handleChange={handleChange}
                loading={loading}
                msg={msg}
                response={response}
              />
            }
          />
          <ColPhoto />
        </>
      }
    />
  );
}

export default Login;
