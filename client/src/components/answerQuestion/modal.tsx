import React from "react";
import { Modal } from "../../hooks/modal/modal";
import ContentModal from "./contentModal";

interface Params {
  isShown: boolean;
  toggle: () => void;
  id:number;
  idQuestion:number;
}

const ModalCom = ({ isShown, toggle, id, idQuestion }: Params) => {
  return (
    <>
      <Modal isShown={isShown} hide={toggle} modalContent={<ContentModal id={id} idQuestion={idQuestion} />} />
    </>
  );
};

export default ModalCom;
