import Form from "../components/auth/formRegister";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import { Suspense } from "react";
export function Register(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <LoginRegisterRecuperate
        content={
          <>
            <ColContent
              title={"Ingresa la contraseña nueva"}
              text={"Hola!"}
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
