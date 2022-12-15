import styled from "styled-components";
import Card from "../styles/card";
import { Suspense, useState } from "react";
import { UseModal } from "../hooks/useModal";
import ModalCom from "../components/answerQuestion/modal";
import { useParams } from "react-router-dom";
import CardComponent from "../components/answerQuestion";
import useLoadData from "../hooks/useLoadDataParams";
import { getQuestions } from "../services/question";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
import { UseForm } from "@/hooks/useForm";
import { initialForm, validationsForm } from "@/validations/answer";
import { addAnswer } from "@/services/answer";
import IQuestion from "@/interface/answerQuestion";
import Navbar from "@/components/navbar";

const Container = styled.div`
  width: calc(100%-15px);
  min-height: 100vh;
`;

const AnswerQuestion = () => {
  //parse id to Number
  const { id } = useParams();
  const IdNumber = parseInt(id!);
  //get data
  const { data, loading } = useLoadData(getQuestions, IdNumber);
  //verify user
  const {} = useVerifyUserLogin();

  const { isShown, toggle } = UseModal();
  const [idQuestion, setIdQuestion] = useState(0);

  const handleClick = (id: number) => {
    toggle();
    setIdQuestion(id);
  };

  const valForm = UseForm(initialForm, validationsForm, addAnswer);

  const sendData = (e: any) => {
    valForm.form.id_real_estate = IdNumber;
    valForm.form.id_question = idQuestion;
    valForm.handleSubmit(e);
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
          id={IdNumber}
          idQuestion={idQuestion}
          data={data}
          form={valForm.form}
          handleChange={valForm.handleChange}
          errors={valForm.errors}
          loadingForm={valForm.loading}
          msg={valForm.msg}
          response={valForm.response}
          sendData={sendData}
        />
      </Container>
    </Suspense>
  );
};

export default AnswerQuestion;
