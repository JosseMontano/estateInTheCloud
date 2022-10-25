import Form from "../components/auth/formRegister";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";

export function Register(): JSX.Element {
  return (
    <LoginRegisterRecuperate
      text={"Hola!"}
      title="Ingresa la contraseña nueva"
      form={<Form />}
      position="right"
    />
  );
}

export default Register;
