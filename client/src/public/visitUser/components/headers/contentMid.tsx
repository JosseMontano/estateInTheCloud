import styled from "styled-components";
import { marginInElements } from "@/global/styles/globals";
import { useLanguage } from "@/global/context/languageContext";

const Container = styled.div`
  display: flex;
`;
const P = styled.p<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  text-align: center;
`;

interface Params {
  amountPublication: number;
}

const ContentMid = ({ amountPublication }: Params) => {
  const {text} = useLanguage()
  return (
    <Container>
      <P marginInElements={marginInElements}>
        {amountPublication} {text.visitUserAmountPublications}
      </P>
      <P marginInElements={marginInElements}>100 {text.visitUserFollowers}</P>
      <P marginInElements={marginInElements}>100 {text.visitUserFollows}</P>
    </Container>
  );
};

export default ContentMid;
