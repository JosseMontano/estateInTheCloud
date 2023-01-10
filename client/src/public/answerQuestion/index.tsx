import Card from "../../styles/card";
import { Suspense, useState } from "react";
import { UseModal } from "@/global/hooks/useModal";
import ModalCom from "./components/modal";
import { useParams } from "react-router-dom";
import CardComponent from "./components";
import useLoadData from "../../global/hooks/useFetch";
import { getQuestions } from "./services/question";
import useVerifyUserLogin from "@/global/hooks/useVerifyUserLogin";
import { addAnswer } from "@/services/answer";
import Navbar from "@/global/components/navbar";
import styled from "styled-components";
import QuestionType from "@/public/answerQuestion/interfaces/question";
import { useMutation } from "@apollo/client";

const Container = styled.div`
  width: calc(100%-15px);
  min-height: 100vh;
`;

const AnswerQuestion = () => {
  //parse id to Number
  const { id } = useParams();
  const id_real_estate = parseInt(id!);
  //get data
  const { data, loading } = useLoadData<QuestionType>(
    getQuestions,
    id_real_estate
  );
  //verify user
  const {} = useVerifyUserLogin();

  const { isShown, toggle } = UseModal({});
  const [idQuestion, setIdQuestion] = useState(0);

  const [createAnswer] = useMutation(addAnswer());

  const handleAddAnswer = (answer: string) => {
    const id_question = idQuestion;
    createAnswer({
      variables: {
        answer: answer,
        id_real_estate: id_real_estate,
        id_question: id_question,
      },
    });
    alert("guardado");
  };

  const handleClick = (id?: number) => {
    toggle();
    if (id) setIdQuestion(id);
  };

  const showCardComponent = () => {
    return data.map((v, i) => (
      <CardComponent key={i} v={v} handleClick={handleClick} />
    ));
  };

  return (
    <Suspense fallback={null}>
      <Container>
        <Navbar />
        <Card>{loading ? <p>Cargando</p> : showCardComponent()}</Card>
        <ModalCom
          toggle={toggle}
          isShown={isShown}
          id={id_real_estate}
          idQuestion={idQuestion}
          data={data}
          handleAddAnswer={handleAddAnswer}
        />
      </Container>
    </Suspense>
  );
};

export default AnswerQuestion;
