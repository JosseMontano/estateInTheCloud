import { Container, ContainerSoon } from "../../styles/auth";
interface Params {
  content: JSX.Element;
}

const LoginRegisterRecuperate = ({ content }: Params) => {
  return (
    <Container>
      <ContainerSoon>{content}</ContainerSoon>
    </Container>
  );
};

LoginRegisterRecuperate.defaultProps = {
  position: "left",
};

export default LoginRegisterRecuperate;
