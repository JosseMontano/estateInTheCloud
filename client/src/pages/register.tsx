import Form from "../components/auth/formRegister";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
export function Register(): JSX.Element {
  return (
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
  );
}

export default Register;
