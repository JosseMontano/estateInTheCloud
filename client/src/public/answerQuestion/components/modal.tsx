import { Modal } from "jz-modal";
import ContentModal from "./contentModal";
import QuestionType from "../interfaces/question";
interface Params {
  isShown: boolean;
  toggle: () => void;
  id: number;
  idQuestion: number;
  data: QuestionType[];
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
