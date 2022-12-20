import styled from "styled-components";
import { marginInElements } from "@/styles/globals";
import { Btn } from "@/styles/btn";
import { useLanguage } from "@/context/languageContext";
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
  const { text } = useLanguage();
  return (
    <Container>
      <SPAN marginInElements={marginInElements}>{email}</SPAN>
      <Btn marginInElements={marginInElements}>{text.profileSendMessage}</Btn>
      <Btn marginInElements={marginInElements}>{text.profileSendRequest}</Btn>
      <Btn onClick={toggle} marginInElements={marginInElements}>
        {text.profileCreatePublicate}
      </Btn>
    </Container>
  );
};

export default ContentBtn;
