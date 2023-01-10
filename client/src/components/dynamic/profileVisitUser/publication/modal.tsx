import { RealEstate } from "@/interfaces/realEstate";
import { Modal } from "@/global/components/modal";
import { ContentModal } from "./modal/indexModal";

interface Params {
  isShowTrue: boolean;
  toggleTrue: () => void;
  v: RealEstate;
  showbtn: boolean;
}

const ModalCom = (params: Params) => {
  return (
    <Modal
      isShown={params.isShowTrue}
      hide={params.toggleTrue}
      modalContent={<ContentModal v={params.v} showbtn={params.showbtn} />}
    />
  );
};

export default ModalCom;
