import styled from "styled-components";
import IAQ from "@/public/questionsAnswered/interfaces/answerQuestionInterested";
import useTranslate from "../hooks/useTranslate";

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
  const {titleState, responseState} = useTranslate({ response: v.answer, title: v.question });
  return (
    <>
      <Question>{titleState}</Question>
      <Response>R. {responseState}</Response>
    </>
  );
};

export default Content;
