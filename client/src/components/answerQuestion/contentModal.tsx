import styled from "styled-components";
import { ColorText, Title, ColorBtn } from "@/styles/globals";
import Loader from "../global/loading";
import Message from "../global/message";
import { Button, MsgError, TextArea } from "jz-validation-form";
import Event from "@/interface/event";
import Answer from "@/interface/answer";
import { useState } from "react";
const Container = styled.div``;

interface Params {
  handleAddAnswer: (answerInput: string) => void;
}

const ContentModal = ({ handleAddAnswer }: Params) => {
  const [answer, setAnswer] = useState("");
  const handleSubmit = () => {
    handleAddAnswer(answer);
  };
  return (
    <Container>
      <Title colorText={ColorText}>Responder Pregunta</Title>
      <TextArea
        onChange={(e) => setAnswer(e.target.value)}
        name={"answer"}
        cols={50}
        rows={5}
      />

      <Button onClick={handleSubmit} ColorBtn={ColorBtn}>
        Guardar
      </Button>
    </Container>
  );
};

export default ContentModal;
