import styled from "styled-components";
import { marginInElements } from "../../../styles/globals";

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
const Btn = styled.button<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 0.2rem;
  font-size: 16px;
  background: transparent;
  padding: 5px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
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
