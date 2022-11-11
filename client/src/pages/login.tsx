import Form from "../components/auth/formLogin";
import LoginRegisterRecuperate from "../components/dynamic/loginRegisterRecuperate";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
export function Login(): JSX.Element {
  return (
    <LoginRegisterRecuperate
      content={
        <>
          <ColContent
            title={"Inicia sesion o create una cuenta"}
            text={"Hola de nuevo"}
            form={<Form />}
          />
          <ColPhoto />
        </>
      }
    />
  );
}

export default Login;
