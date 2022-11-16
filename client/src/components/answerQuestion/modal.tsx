import { Modal } from "../global/modal";
import ContentModal from "./contentModal";
import Question from "@/interface/question";

interface Params {
  isShown: boolean;
  toggle: () => void;
  id: number;
  idQuestion: number;
  data: Question[];
  form: any;
  handleChange: (e: any) => void;
  errors: any;
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
