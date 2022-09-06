import styled from "styled-components";
import ColContent from "../components/auth/colContent";
import ColPhoto from "../components/auth/colPhoto";
import Form from "../components/auth/formLogin";
const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100%;
  background: #0f2027;
  background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
`;
const ContainerSoon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
