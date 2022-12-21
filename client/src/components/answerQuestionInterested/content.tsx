import styled from "styled-components";
import IAQ from "interface/answerQuestionInterested";

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

const Question = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  &:hover {
    color: #d1a90aac;
  }
`;

const Response = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 2px;
`;

const Content = (v: IAQ) => {
  return (
    <ContainerSoon>
      <Question>{v.question}</Question>
      <Response>R. {v.answer}</Response>
    </ContainerSoon>
  );
};

export default Content;
