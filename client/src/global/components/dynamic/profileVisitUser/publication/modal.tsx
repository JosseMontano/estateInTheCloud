import { RealEstate } from "@/global/interfaces/realEstate";
import { Modal } from "jz-modal";
import { ContentModal } from "./modal/indexModal";
import UsePlacesNear from "@/public/visitUser/hooks/usePlacesNear";

interface Params {
  isShowTrue: boolean;
  toggleTrue: () => void;
  v: RealEstate;
  showbtn: boolean;
}

const ModalCom = (params: Params) => {
  const { placesNear, handleRedirectToMaps, types } = UsePlacesNear({ v: params.v });

  return (
    <Modal
      isShown={params.isShowTrue}
      hide={params.toggleTrue}
      modalContent={
        <ContentModal
          v={params.v}
          showbtn={params.showbtn}
          placesNear={placesNear}
          handleRedirectToMaps={handleRedirectToMaps}
          types={types}
        />
      }
    />
  );
};

export default ModalCom;
