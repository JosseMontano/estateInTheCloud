import Form from "../components/auth/formLogin";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";

export function Login(): JSX.Element {
  return (
    <LoginRegisterRecuperate
      text={"Inicia sesion o entra si eres paciente"}
      title="Hola de nuevo"
      form={<Form />}
    />
  );
}

export default Login;
