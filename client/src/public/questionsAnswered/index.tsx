import { getAnswerByRealEstate } from "../answerQuestion/services/answer";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DataEmpty from "@/global/components/dataEmpty";
import CardSoon from "./components/";
import { Suspense } from "react";
import { useQuery } from "@apollo/client";
import { useLanguage } from "@/global/context/languageContext";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AnswerQuestionInterested = () => {
  const { id } = useParams();
  const idNumer = parseFloat(id!);
  const query = getAnswerByRealEstate(idNumer);
  const { data, loading, error } = useQuery(query);

  const { text } = useLanguage();

  function validateData() {
    if (data) {
      const dataCut = data.getAnswerQuestionByRealEstate;
      if (dataCut.length > 0) return <CardSoon data={dataCut} />;
    }
    return <DataEmpty msg={text.dataEmpty} />;
  }

  if (error) return <p>{error.message}</p>;

  return (
    <Suspense fallback={null}>
      <Container>
        <Card>{validateData()}</Card>
      </Container>
    </Suspense>
  );
};

export default AnswerQuestionInterested;
