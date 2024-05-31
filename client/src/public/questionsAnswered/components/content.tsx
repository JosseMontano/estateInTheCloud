import styled from "styled-components";
import IAQ from "@/public/questionsAnswered/interfaces/answerQuestionInterested";
import useTranslate from "../hooks/useTranslate";
import { useEffect, useState } from "react";
import translate from "@/public/home/utilities/translate";
import { ColorBtn } from "@/global/styles/globals";

const ContainerSoon = styled.div`
  background-color: #fff;
  color: #7f7f7f;
  width: 300px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  display: grid;
  border-radius: 25px;
  place-content: center;
`;

const Question = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  color: ${ColorBtn};
`;

const Response = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 2px;
`;

const Content = (v: IAQ) => {
  const { titleState, responseState, loadTxt } = useTranslate({
    title: v.question,
    response: v.answer,
  });

  return (
    <>
      {!loadTxt && (
        <ContainerSoon>
          <Question>
            <p>{titleState}</p>
          </Question>
          <Response>
            <p>R. {responseState}</p>
          </Response>
        </ContainerSoon>
      )}
    </>
  );
};

export default Content;
