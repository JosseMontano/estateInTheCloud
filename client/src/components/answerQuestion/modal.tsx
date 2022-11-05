import { Modal } from "../global/modal";
import ContentModal from "./contentModal";
import Question from "../../interface/question";

interface Params {
  isShown: boolean;
  toggle: () => void;
  id: number;
  idQuestion: number;
  data: Question[];
}

const ModalCom = ({ isShown, toggle, id, idQuestion, data }: Params) => {
  return (
    <Modal
      isShown={isShown}
      hide={toggle}
      modalContent={
        <ContentModal id={id} idQuestion={idQuestion} data={data} />
      }
    />
  );
};

export default ModalCom;
