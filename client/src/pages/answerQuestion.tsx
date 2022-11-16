import styled from "styled-components";
import Card from "../styles/card";
import { useState } from "react";
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
import { useNavbar } from "@/context/navbarContext";

const Container = styled.div`
  width: calc(100%-15px);
  min-height: 100vh;
`;

interface Params {}

const AnswerQuestion = ({}: Params) => {
  const { showNavbar } = useNavbar();
  const { id } = useParams();
  const IdNumber = parseInt(id!);

  const { data, loading } = useLoadData(getQuestions, IdNumber);
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

  return (
    <Container>
      {showNavbar()}
      <Card>
        {loading ? (
          <p>Cargando</p>
        ) : (
          data.map((v, i) => (
            <CardComponent key={i} v={v} handleClick={handleClick} />
          ))
        )}
      </Card>

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
  );
};

export default AnswerQuestion;
