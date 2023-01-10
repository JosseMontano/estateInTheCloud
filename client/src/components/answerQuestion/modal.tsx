import { Modal } from "@/global/components//modal";
import ContentModal from "./contentModal";
import Question from "@/interfaces/question";
import Answer from "@/interfaces/answer";
import Event from "@/global/interfaces/event";
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
