import styled from "styled-components";
import { marginInElements } from "@/global/styles/globals";
import { useLanguage } from "@/global/context/languageContext";
import { useNameUser } from "@/global/context/nameUserContext";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const P = styled.p<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  text-align: center;
`;

interface Params {
  amountPublciation: number;
}

const ContentMid = ({ amountPublciation }: Params) => {
  const { text } = useLanguage();
  const description =
    amountPublciation != 1 ? text.profilePublication : text.profilePublications;

  return (
    <Container>
      <P marginInElements={marginInElements}>
        {amountPublciation} {description}
      </P>
      {/*       <P marginInElements={marginInElements}>100 {text.profileFollower}</P>
      <P marginInElements={marginInElements}>100 {text.profileFollow}</P> */}
    </Container>
  );
};

export default ContentMid;
