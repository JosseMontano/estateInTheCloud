import styled from "styled-components";
import { ColorBtnThird, Title } from "@/global/styles/globals";

const Container = styled.div`
  display: grid;
  place-content: center;
  padding: 30px;
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
     {params.form}
    </Container>
  );
};

export default ColContent;
