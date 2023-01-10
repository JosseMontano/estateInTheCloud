import styled from "styled-components";
import IAQ from "@/public/questionsAnswered/interfaces/answerQuestionInterested";

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
    <>
      <Question>{v.question}</Question>
      <Response>R. {v.answer}</Response>
    </>
  );
};

export default Content;
