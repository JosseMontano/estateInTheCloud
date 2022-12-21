import React from "react";
import { Title, ColorText } from "styles/globals";
import { postQuestion } from "services/question";
import { initialForm, validationsForm } from "validations/question";
import FormComponent from "./form";
import styled from "styled-components";
import LoadAndResponse from "./loadAndResponse";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "context/languageContext";


const Container = styled.div``;

const Index = () => {
  const {text} = useLanguage()
  const { form, errors, loading, response, msg, handleSubmit, handleChange } =
    UseForm(initialForm, validationsForm, postQuestion);
  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };
  return (
    <Container>
      <Title colorText={ColorText}>{text.questionTitle}</Title>

      <FormComponent
        err={errors.question}
        val={form.question}
        handleChange={handleChange}
        sendData={sendData}
      />

      <LoadAndResponse loading={loading} response={response} msg={msg} />
    </Container>
  );
};

export default Index;
