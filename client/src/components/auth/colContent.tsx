import styled from "styled-components";
import { ColorText } from "../../styles/globals";

const Container = styled.div`
  display: grid;
  place-content: center;
  padding: 30px;
`;
const Title = styled.h2<{ colorText: string }>`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.colorText};
`;
const TextP = styled.p`
  margin: 10px 0px;
  color: #b9b9b9;
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
      <Title colorText={ColorText}>{params.title}</Title>
      <TextP>{params.text}</TextP>
     {params.form}
    </Container>
  );
};

export default ColContent;
