import styled from "styled-components";
import { Comments } from "@/public/visitUser/interfaces/comments";
import ShowStarts from "./showStarts";
import useTranslate from "../../hooks/useTranslate";
import { useLanguage } from "@/global/context/languageContext";

const Container = styled.div`
  align-self: center;
`;
const NameUser = styled.h3`
  @media screen and (max-width: 732px) {
    text-align: center;
    font-size: 26px;
  }
`;
const Content = (v: Comments) => {
  const { descriptionState, loadTxt } = useTranslate({
    description: v.description,
  });

  const {text} = useLanguage()

  return (
    <Container>
      <NameUser>{v.email}</NameUser>
      <p>{loadTxt ? text.laodingTheText : descriptionState}</p>
      <ShowStarts sizeStart={v.amount_start} />
    </Container>
  );
};

export default Content;
