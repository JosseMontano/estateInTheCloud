import { Modal } from "../global/modal";
import ContentModal from "./contentModal";
import Question from "@/interface/question";
import Answer from "@/interface/answer";
import Event from "@/interface/event";
interface Params {
  isShown: boolean;
  toggle: () => void;
  id: number;
  idQuestion: number;
  data: Question[];
  form: Answer;
  handleChange: (e: Event["inputChangeIT"]) => void;
  errors: Answer;
  sendData: (e: any) => void;
  loadingForm: boolean;
  msg: string;
  response: boolean;
}

const ModalCom = (params: Params) => {
  return (
    <Modal
      isShown={params.isShown}
      hide={params.toggle}
      modalContent={
        <ContentModal
          form={params.form}
          handleChange={params.handleChange}
          errors={params.errors}
          loading={params.loadingForm}
          msg={params.msg}
          response={params.response}
          sendData={params.sendData}
        />
      }
    />
  );
};

export default ModalCom;
