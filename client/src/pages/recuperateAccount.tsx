import Form from "../components/auth/formRecuperateAccount";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import { Suspense } from "react";
import { useLanguage } from "@/context/languageContext";
export function Login(): JSX.Element {
  const { text } = useLanguage();
  return (
    <Suspense fallback={null}>
      <LoginRegisterRecuperate
        content={
          <>
            <ColContent
              title={text.recuperateAccountTitle}
              text={text.recuperateAccountSubtitle}
              form={<Form />}
            />
            <ColPhoto />
          </>
        }
      />
    </Suspense>
  );
}

export default Login;
