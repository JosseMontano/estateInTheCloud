import { Container, ContainerSoon } from "../../styles/auth";
import ColContent from "../auth/colContent";
import ColPhoto from "../auth/colPhoto";

interface Params {
  title: string;
  text: string;
  form: JSX.Element;
  position?: string;
}

const LoginRegisterRecuperate = ({ title, text, form, position }: Params) => {
    
  function content() {
    if (position === "left")
      return (
        <ContainerSoon>
          <ColContent title={title} text={text} form={form} />
          <ColPhoto />{" "}
        </ContainerSoon>
      );
    return (
      <ContainerSoon>
        <ColPhoto />
        <ColContent title={title} text={text} form={form} />
      </ContainerSoon>
    );
  }

  return <Container>{content()}</Container>;
};

LoginRegisterRecuperate.defaultProps = {
  position: "left",
};

export default LoginRegisterRecuperate;
