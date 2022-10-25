import Form from "../components/auth/formRecuperateAccount";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";

export function Login(): JSX.Element {
  return (
    <LoginRegisterRecuperate
      text={"Hola!"}
      title="Ingresa la contraseña nueva"
      form={<Form />}
    />
  );
}

export default Login;
