import { RealEstate } from "@/interfaces/realEstate";
import { Modal } from "../../../global/modal";
import { ContentModal } from "./modal/indexModal";

interface Params {
  isShowTrue: boolean;
  toggleTrue: () => void;
  v: RealEstate;
  showbtn: boolean;
  updateStateRE?: (available: boolean, id: number) => void;
}

const ModalCom = (params: Params) => {
  return (
    <Modal
      isShown={params.isShowTrue}
      hide={params.toggleTrue}
      modalContent={
        <ContentModal
          v={params.v}
          showbtn={params.showbtn}
          updateStateRE={params.updateStateRE}
        />
      }
    />
  );
};

export default ModalCom;
