import styled from "styled-components";
import { ColorText, Title, ColorBtn } from "@/global/styles/globals";
import { Button } from "jz-validation-form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Container = styled.div``;

interface Params {
  handleAddAnswer: (answerInput: string) => void;
}

interface FormType {
  answer: string;
}

const ContentModal = ({ handleAddAnswer }: Params) => {
  /*   const [answer, setAnswer] = useState(""); */
  const handleSubmit = (values: FormType) => {
    const { answer } = values;
    handleAddAnswer(answer);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          answer: "",
        }}
        validationSchema={Yup.object({
          answer: Yup.string().required("This field is required"),
        })}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <Title colorText={ColorText}>Responder Pregunta</Title>
          <Field className="input" name={"answer"} cols={50} rows={5} />
          <ErrorMessage className="msgError" component={"span"} name="answer" />
          <Button type="submit" ColorBtn={ColorBtn}>
            Guardar
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default ContentModal;
