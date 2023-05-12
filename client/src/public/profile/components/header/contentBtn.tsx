import styled from "styled-components";
import { marginInElements } from "@/global/styles/globals";
import { Btn } from "@/global/styles/btn";
import { useLanguage } from "@/global/context/languageContext";
import { useNameUser } from "@/global/context/nameUserContext";

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
  toggle: () => void;
  isShown: boolean;
}
const ContentBtn = ({ toggle, isShown }: Params) => {
  const { email } = useNameUser();
  const { text } = useLanguage();
  return (
    <Container>
      <SPAN marginInElements={marginInElements}>{email}</SPAN>
      <Btn marginInElements={marginInElements}>{text.profileEditProfile}</Btn>
      <Btn onClick={toggle} marginInElements={marginInElements}>
        {isShown ? text.profileShowPublicate : text.profileCreatePublicate}
      </Btn>
    </Container>
  );
};

export default ContentBtn;
