import Form from "../components/auth/formRegister";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import { Suspense } from "react";
import { useLanguage } from "@/context/languageContext";
export function Register(): JSX.Element {
  const { text } = useLanguage();
  return (
    <Suspense fallback={null}>
      <LoginRegisterRecuperate
        content={
          <>
            <ColContent
              title={text.registerTitle}
              text={text.registerSubtitle}
              form={<Form />}
            />
            <ColPhoto />
          </>
        }
      />
    </Suspense>
  );
}

export default Register;
