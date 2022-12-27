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
  handleAddAnswer:(answerInput: string)=>void;
}

const ModalCom = (params: Params) => {
  return (
    <Modal
      isShown={params.isShown}
      hide={params.toggle}
      modalContent={
        <ContentModal
        handleAddAnswer={params.handleAddAnswer}
        />
      }
    />
  );
};

export default ModalCom;
