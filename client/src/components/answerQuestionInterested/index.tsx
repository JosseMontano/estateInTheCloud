import IAQ from "@/interfaces/answerQuestionInterested";
import styled from "styled-components";
import Content from "./content";

interface Params {
  data: IAQ[];
}

const ContainerSoon = styled.div`
  background-color: #8f9243c0;
  color: #fff;
  width: 300px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  display: grid;
  place-content: center;
`;

const Index = ({ data }: Params) => {
  return (
    <>
      {data.map((v, i) => (
        <ContainerSoon key={i}>
          <Content {...v} />
        </ContainerSoon>
      ))}
    </>
  );
};

export default Index;
