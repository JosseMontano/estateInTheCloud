import { useEffect, useState } from "react";
import { getAnswerByRealEstate } from "../services/answer";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar";
import AuxNav from "../components/navbar/auxNav";
import DataEmpty from "../components/global/dataEmpty";
import IAQ from "../interface/answerQuestionInterested";
import CardSoon from "../components/answerQuestionInterested";
import useLoadData from "../hooks/useLoadDataParams";
const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AnswerQuestionInterested = () => {
  const { id } = useParams();
  const idNumer = parseFloat(id!);
  const { data } = useLoadData(getAnswerByRealEstate, idNumer);

  function validateData() {
    if (data.length != 0) return <CardSoon data={data} />;
    return <DataEmpty msg="No hay respuestas" />;
  }

  return (
    <Container>
      <Navbar />
      <AuxNav margin={"1700px"} />
      <Card>{validateData()}</Card>
    </Container>
  );
};

export default AnswerQuestionInterested;
