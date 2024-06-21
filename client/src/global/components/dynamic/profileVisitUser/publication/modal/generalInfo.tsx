import { useLanguage } from "@/global/context/languageContext";
import { ColorBtn } from "@/global/styles/globals";
import { H2, P } from "@/global/styles/modal/perfil";
import styled from "styled-components";

const Container = styled.div`
 width: 240px;
 word-break: break-word;
 hyphens: auto;
`;

const ContainerDescription = styled.div`
  scrollbar-width: thin;
  scrollbar-color: ${ColorBtn} transparent;
`;
interface Props {
  title: string;
  description: string;
  loadTxt: boolean;
}

const GeneralInfo = ({ description, title, loadTxt }: Props) => {
  const { text } = useLanguage();
  return (
    <Container>
      <H2>{loadTxt ? text.laodingTheText : title}</H2>
      <ContainerDescription>
        {" "}
        <P>{loadTxt ? text.laodingTheText : description}</P>
      </ContainerDescription>
    </Container>
  );
};

export default GeneralInfo;
