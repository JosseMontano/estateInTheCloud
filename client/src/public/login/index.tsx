import Form from "./components/formLogin";
import ColContent from "./components/colContent";
import ColPhoto from "./components/colPhoto";
import { initialForm, validationsForm } from "./validations/login";
import { signIn, signInGoogle } from "./services/auth";
import {
  ColorBtn,
  ColorBtnSecond,
  ColorBtnThird,
} from "@/global/styles/globals";
import { Suspense, useState } from "react";
import ShowPassword from "@/public/login/icons/eye";
import NoShowPassword from "./icons/noShowPassword";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/global/context/languageContext";
import { Modal, useModal } from "jz-modal";
import {
  Container,
  ContainerColPhoto,
  ContainerSoon,
} from "@/public/login/styles";
import { useNameUser } from "@/global/context/nameUserContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useNavigate } from "react-router-dom";
import ModalConfig from "@/global/components/navbar/modalConfig";

export function Login(): JSX.Element {
  const { text } = useLanguage();
  const navigate = useNavigate();
  const { handlenameUser } = useNameUser();

  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm(initialForm, validationsForm, signIn);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      if (result.user.email) {
        const { displayName, email, phoneNumber, photoURL } = result.user;
        handlenameUser(displayName || "", 1, email);
        const res = await signInGoogle({
          displayName: displayName || "",
          email,
          phoneNumber: phoneNumber || "",
          photoURL: photoURL || "",
          uid: result.user.uid,
        });
        if (res) navigate(`/home`);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  let dataBtn = [
    {
      onclick: handleSubmit,
      color: ColorBtnSecond,
      text: text.loginBtnGetInto,
    },
    {
      onclick: () => {
        navigate("/register");
      },
      color: ColorBtn,
      text: text.loginBtnCreateAccount,
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

  const { isShown: isShownConfig, toggle: toggleConfig } = useModal({});

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Container>
        <ContainerSoon>
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
                toggleConfig={toggleConfig}
                handleGoogleLogin={handleGoogleLogin}
              />
            }
          />
          <ContainerColPhoto>
            <ColPhoto />
          </ContainerColPhoto>
        </ContainerSoon>
      </Container>

      <Modal
        isShown={isShownConfig}
        hide={toggleConfig}
        modalContent={<ModalConfig />}
      />
    </Suspense>
  );
}

export default Login;
