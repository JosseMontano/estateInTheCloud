import { Title, ColorText, SubTitle } from "@/global/styles/globals";
import { postQuestion } from "@/public/answerQuestion/services/question";
import {
  initialForm,
  validationsForm,
} from "@/public/answerQuestion/validations/question";
import FormComponent from "./form";
import styled from "styled-components";
import LoadAndResponse from "@/global/components/toast/loadAndResponse";
import { UseForm } from "jz-validation-form";
import { useLanguage } from "@/global/context/languageContext";
import Event from "@/global/interfaces/event";
import { showToast } from "@/global/utilities/toast";

const Container = styled.div``;

const Index = () => {
  const { text } = useLanguage();
  const { form, errors, loading, response, msg, handleSubmit, handleChange } =
    UseForm(initialForm, validationsForm, postQuestion);
  const sendData = (e: Event["buttonSend"]) => {
    handleSubmit(e);
  };

  const handleShowToast = () => {
    showToast(msg);
  };

  return (
    <>
      <Container>
        <SubTitle colorText={ColorText}>{text.questionTitle}</SubTitle>

        <FormComponent
          err={errors.question}
          val={form.question}
          handleChange={handleChange}
          sendData={sendData}
          handleShowToast={handleShowToast}
        />
      </Container>
      {/*       <LoadAndResponse loading={loading} response={true} msg={msg} /> */}
    </>
  );
};

export default Index;
