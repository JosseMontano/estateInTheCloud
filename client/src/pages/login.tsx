import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import Form from "../components/auth/formLogin";
import { Container, ContainerSoon } from "../styles/auth";

export function Login(): JSX.Element {
  return (
    <Container>
      <ContainerSoon>
        <ColPhoto />
        <ColContent
          title="Hola de nuevo"
          text="Inicia sesion o entra si eres paciente"
          form={<Form />}
        />
      </ContainerSoon>
    </Container>
  );
}

export default Login;
