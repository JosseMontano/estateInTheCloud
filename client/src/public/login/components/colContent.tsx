import styled from "styled-components";
import { ColorBtnSecond, ColorBtnThird, Title } from "@/global/styles/globals";

const Container = styled.div`
  display: grid;
  place-content: center;
  padding: 30px;
`;

const TextP = styled.p`
  margin: 10px 0px;
  color: ${ColorBtnSecond};
  font-size: 22px;
`;
interface Params {
  title: string;
  text: string;
  form:JSX.Element;
}
const ColContent = (params: Params) => {
  return (
    <Container>
      <Title colorText={ColorBtnThird}>{params.title}</Title>
      <TextP>{params.text}</TextP>
     {params.form}
    </Container>
  );
};

export default ColContent;
