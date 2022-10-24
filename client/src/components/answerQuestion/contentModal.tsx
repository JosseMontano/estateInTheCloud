import React from "react";
import styled from "styled-components";
import {
  ColorText,
  Title,
  Button,
  ColorBtn,
  ErrorCss,
  TextArea,
} from "../../styles/globals";
import { UseForm } from "../../hooks/useForm";
import { initialForm, validationsForm } from "../../validations/answer";
import { addAnswer } from "../../services/answer";
import Loader from "../loader";
import Message from "../message";
const Container = styled.div``;

interface Params {
  id: number;
  idQuestion: number;
}

const ContentModal = ({ id, idQuestion }: Params) => {
  const { errors, form, handleChange, handleSubmit, loading, msg, response } =
    UseForm(initialForm, validationsForm, addAnswer);

  const sendData = (e: any) => {
    form.id_real_estate = id;
    form.id_question = idQuestion;
    handleSubmit(e);
  };

  return (
    <Container>
      <Title colorText={ColorText}>Responder Pregunta</Title>
      <TextArea
        name={"answer"}
        value={form.answer}
        onChange={(e) => handleChange(e)}
        cols={50}
        rows={5}
      />
      {errors.answer && <ErrorCss>{errors.answer}</ErrorCss>}
      <Button onClick={(e) => sendData(e)} ColorBtn={ColorBtn}>
        Guardar
      </Button>
      {loading && <Loader />}
      {response && <Message msg={msg} />}
    </Container>
  );
};

export default ContentModal;
