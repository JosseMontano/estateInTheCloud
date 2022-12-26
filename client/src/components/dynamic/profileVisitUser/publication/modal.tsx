import { RealEstate } from "@/interface/realEstate";
import { Modal } from "../../../global/modal";
import { ContentModal } from "./modal/indexModal";

interface Params {
  isShowTrue: boolean;
  toggleTrue: () => void;
  v: RealEstate;
  showbtn: boolean;
  deleteRealEstate?: (id: number) => void;
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
          deleteRealEstate={params.deleteRealEstate}
          updateStateRE={params.updateStateRE}
        />
      }
    />
  );
};

export default ModalCom;
