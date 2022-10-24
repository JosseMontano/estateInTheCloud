import styled from "styled-components";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import Form from "../components/auth/formRegister";
import { Container, ContainerSoon } from "../styles/auth";

export function Register(): JSX.Element {
  return (
    <Container>
      <ContainerSoon>
        <ColContent
          title="Bienvenido"
          text="Ingresa tus credenciales para comenzar"
          form={<Form />}
        />
        <ColPhoto />
      </ContainerSoon>
    </Container>
  );
}

export default Register;
