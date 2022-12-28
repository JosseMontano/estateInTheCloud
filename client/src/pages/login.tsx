import Form from "../components/auth/formLogin";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import { initialForm, validationsForm } from "@/validations/login";
import { signIn } from "@/services/auth";
import { ColorBtn, ColorBtnSecond, ColorBtnThird } from "@/styles/globals";
import { Suspense, useState } from "react";
import ShowPassword from "@/icons/eye";
import NoShowPassword from "@/icons/noShowPassword";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/context/languageContext";
import { Modal } from "@/components/global/modal";
import { UseModal } from "@/hooks/useModal";
import FormRegister from "@/components/auth/formRegister";
import FormRecuperate from "@/components/auth/formRecuperateAccount";

export function Login(): JSX.Element {
  const { text } = useLanguage();
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm(initialForm, validationsForm, signIn);
  const [showPassword, setShowPassword] = useState(false);
  const { isShown: isShownRegister, toggle: toggleRegister } = UseModal({});
  const { isShown: isShownRA, toggle: toggleRA } = UseModal({});

  let dataBtn = [
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: text.loginBtnGetInto,
    },
    {
      onclick: toggleRegister,
      color: ColorBtn,
      text: text.loginBtnCreateAccount,
    },
    {
      onclick: toggleRA,
      color: ColorBtnThird,
      text: text.loginBtnRecuperateAccount,
    },
  ];

  let dataForm = [
    {
      label: text.loginLabelGmail,
      name: "email",
      value: form.email,
      errors: errors.email,
      type: "text",
    },
    {
      label: text.loginLabelPassword,
      name: "password",
      value: form.password,
      errors: errors.password,
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

  return (
    <Suspense fallback={<p>Loading</p>}>
      <LoginRegisterRecuperate
        content={
          <>
            <ColContent
              title={text.loginTitle}
              text={text.loginSubtitle}
              form={
                <Form
                  handleShowPass={handleShowPass}
                  dataBtn={dataBtn}
                  dataForm={dataForm}
                  handleChange={handleChange}
                  loading={loading}
                  msg={msg}
                  response={response}
                  EyeJSX={showIconEye}
                />
              }
            />
            <ColPhoto />
          </>
        }
      />
      <Modal
        isShown={isShownRegister}
        hide={toggleRegister}
        modalContent={<FormRegister />}
      />
      <Modal
        isShown={isShownRA}
        hide={toggleRA}
        modalContent={<FormRecuperate />}
      />
    </Suspense>
  );
}

export default Login;
