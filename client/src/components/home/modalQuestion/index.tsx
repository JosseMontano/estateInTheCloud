import React from "react";
import { Button, ColorBtn, ErrorCss } from "../../../styles/globals";
import { postQuestion } from "../../../services/question";
import { initialForm, validationsForm } from "../../../validations/question";
import { UseForm } from "../../../hooks/form/useForm";
import Message from "../../message";
import Loader from "../../loader";
const Index = () => {
  const { form, errors, loading, response, msg, handleSubmit, handleChange } =
    UseForm(initialForm, validationsForm, postQuestion);
  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };
  return (
    <div>
      <h2>Preguntas frecuentes</h2>
      <label htmlFor="">Pregunta</label>
      <input
        type="text"
        required
        name={"question"}
        onChange={handleChange}
        value={form.question}
      />
      {errors.question && <ErrorCss>{errors.question}</ErrorCss>}
      <Button ColorBtn={ColorBtn} onClick={(e: any) => sendData(e)}>
        Haz tu propia pregunta
      </Button>
      {loading && <Loader />}
      {response && <Message msg={msg} />}
    </div>
  );
};

export default Index;
