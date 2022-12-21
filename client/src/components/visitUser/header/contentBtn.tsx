import { marginInElements } from "styles/globals";
import handleSendWhatsapp from "utilities/sendWhatsapp";
import styled from "styled-components";

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
  cellphonenumber: string;
  toggle: () => void;
}
const ContentBtn = ({ email, cellphonenumber, toggle }: Params) => {
  let data = [
    {
      element: SPAN,
      text: email,
      onclick: () => {},
    },
    {
      element: Btn,
      text: "Enviar mensaje",
      onclick: () => handleSendWhatsapp(cellphonenumber),
    },
    {
      element: Btn,
      text: "Enviar solicitud",
      onclick: () => {},
    },
    {
      element: Btn,
      text: "Comentar a la persona",
      onclick: toggle,
    },
  ];

  return (
    <Container>
      {data.map((v, i) => (
        <v.element
          key={i}
          marginInElements={marginInElements}
          onClick={v.onclick}
        >
          {v.text}
        </v.element>
      ))}
    </Container>
  );
};

export default ContentBtn;
