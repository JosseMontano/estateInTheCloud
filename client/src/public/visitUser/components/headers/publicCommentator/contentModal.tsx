import { ColorBtn, ColorText, Title } from "@/global/styles/globals";
import Starts from "./starts";
import { Button } from "jz-validation-form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface params {
  getStart: (val: number) => void;
  SenData: (des: string) => void;
}

interface FormikType {
  description: string;
}

const ContentModal = (params: params) => {
  const handleSendData = (form: FormikType) => {
    const { description } = form;
    params.SenData(description);
  };

  return (
    <Formik
      initialValues={{
        description: "",
      }}
      validationSchema={Yup.object({
        description: Yup.string().required(),
      })}
      onSubmit={(values) => {
        handleSendData(values);
      }}
    >
      <Form>
        <Title colorText={ColorText}>Agregar un comentario</Title>
        <Field className="textArea" name={"description"} cols={50} />
        <ErrorMessage name="description" component={"span"} />

        <Starts getStart={params.getStart} />

        <Button type="submit" ColorBtn={ColorBtn}>
          Guardar
        </Button>
      </Form>
    </Formik>
  );
};

export default ContentModal;
