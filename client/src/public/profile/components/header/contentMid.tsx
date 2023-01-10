import styled from "styled-components";
import { marginInElements } from "@/styles/globals";
import { useLanguage } from "@/context/languageContext";
const Container = styled.div`
  display: flex;
`;
const P = styled.p<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  text-align: center;
`;

interface Params{
  amountPublciation: number;
}

const ContentMid = ({amountPublciation}: Params) => {
  const { text } = useLanguage();
  return (
    <Container>
      <P marginInElements={marginInElements}>{amountPublciation} {text.profilePublication}</P>
      <P marginInElements={marginInElements}>100 {text.profileFollower}</P>
      <P marginInElements={marginInElements}>100 {text.profileFollow}</P>
    </Container>
  );
};

export default ContentMid;
