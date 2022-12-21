import styled from "styled-components";
import { ColorText, Title, ColorBtn } from "styles/globals";
import Loader from "../global/loading";
import Message from "../global/message";
import { Button, MsgError, TextArea } from "jz-validation-form";
const Container = styled.div``;

interface Params {
  form: any;
  handleChange: (e: any) => void;
  errors: any;
  sendData: (e: any) => void;
  loading: boolean;
  msg: string;
  response: boolean;
}

const ContentModal = (params: Params) => {
  return (
    <Container>
      <Title colorText={ColorText}>Responder Pregunta</Title>
      <TextArea
        name={"answer"}
        value={params.form.answer}
        onChange={(e) => params.handleChange(e)}
        cols={50}
        rows={5}
      />
      {params.errors.answer && <MsgError>{params.errors.answer}</MsgError>}
      <Button onClick={(e) => params.sendData(e)} ColorBtn={ColorBtn}>
        Guardar
      </Button>
      {params.loading && <Loader />}
      {params.response && <Message msg={params.msg} />}
    </Container>
  );
};

export default ContentModal;
