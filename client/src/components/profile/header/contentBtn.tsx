import styled from "styled-components";
import { marginInElements } from "@/styles/globals";
import { Btn } from "@/styles/btn";

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;
const SPAN = styled.span<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  align-self: center;
`;

interface Params {
  email?: string;
  toggle: () => void;
}
const ContentBtn = ({ email, toggle }: Params) => {
  return (
    <Container>
      <SPAN marginInElements={marginInElements}>{email}</SPAN>
      <Btn marginInElements={marginInElements}>Enviar mensaje</Btn>
      <Btn marginInElements={marginInElements}>Enviar solicitud</Btn>
      <Btn onClick={toggle} marginInElements={marginInElements}>
        Crear publicacion
      </Btn>
    </Container>
  );
};

export default ContentBtn;
