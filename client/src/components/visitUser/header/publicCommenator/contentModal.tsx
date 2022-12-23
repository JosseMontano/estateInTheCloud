import { ColorText, Title } from "@/styles/globals";
import { useEffect } from "react";
import Loader from "../../../global/loading";
import Message from "../../../global/message";
import Starts from "./starts";
import { Button, MsgError, TextArea } from "jz-validation-form";
import Event from "@/interface/event";
import { FormComment } from "@/interface/formComment";

interface UseFormType {
  form: FormComment;
  errors: FormComment;
  loading: boolean;
  response: boolean;
  msg: string;
  handleChange: (e: Event["htmlChange"]) => void;
  handleSubmit: (e: Event["buttonSend"]) => void;
}
interface params {
  useForm: UseFormType;
  getStart: (val: number) => void;
  SenData: (e: any) => void;
  handleGetPersonCommented: () => void;
}

const ContentModal = (params: params) => {
  useEffect(() => {
    params.handleGetPersonCommented();
  }, []);

  return (
    <div>
      <Title colorText={ColorText}>Agregar un comentario</Title>
      <TextArea
        name={"description"}
        onChange={params.useForm.handleChange}
        value={params.useForm.form.description}
        cols={50}
      />
      {params.useForm.errors.description && (
        <MsgError>{params.useForm.errors.description}</MsgError>
      )}

      <Starts getStart={params.getStart} />

      <Button ColorBtn={"#02ffcc1f"} onClick={(e) => params.SenData(e)}>
        Guardar
      </Button>
      {params.useForm.loading && <Loader />}
      {params.useForm.response && <Message msg={params.useForm.msg} />}
    </div>
  );
};

export default ContentModal;
