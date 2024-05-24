import { useLanguage } from "@/global/context/languageContext";
import { ColorBtn, marginInElements } from "@/global/styles/globals";
import handleSendWhatsapp from "@/global/utilities/sendWhatsapp";
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
  color: #000;
  border: 1px solid #000;
  border-radius: 0.2rem;
  font-size: 16px;
  background: transparent;
  padding: 5px;
  width: 100%;

  &:hover {
    cursor: pointer;
    background: ${ColorBtn};
    color: #fff;
  }
`;
interface Params {
  email?: string;
  cellphonenumber: string;
  toggle: () => void;
}
const ContentBtn = ({ email, cellphonenumber, toggle }: Params) => {

  const {text} = useLanguage()

  let data = [
    {
      element: SPAN,
      text: email,
      onclick: () => {},
    },
    {
      element: Btn,
      text: text.visitUserBtnSendMessage,
      onclick: () => handleSendWhatsapp(cellphonenumber),
    },
    {
      element: Btn,
      text: text.visitUserBtnFollower,
      onclick: () => {},
    },
    {
      element: Btn,
      text: text.visitUserBtnComment,
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
