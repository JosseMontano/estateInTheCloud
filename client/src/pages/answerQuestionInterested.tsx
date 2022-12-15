import { getAnswerByRealEstate } from "../services/answer";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DataEmpty from "../components/global/dataEmpty";
import CardSoon from "../components/answerQuestionInterested";
import useLoadData from "../hooks/useLoadDataParams";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
const Container = styled.div`
  min-height: 100vh;
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
  const {} = useVerifyUserLogin();

  function validateData() {
    if (data.length > 0) return <CardSoon data={data} />;
    return <DataEmpty msg="No hay respuestas" />;
  }

  return (
    <Suspense fallback={null}>
      <Container>
        <Navbar />
        <Card>{validateData()}</Card>
      </Container>
    </Suspense>
  );
};

export default AnswerQuestionInterested;
