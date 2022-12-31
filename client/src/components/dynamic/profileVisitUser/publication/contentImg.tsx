import styled from "styled-components";
import { UseModal } from "@/hooks/useModal";
import { RealEstate } from "@/interfaces/realEstate";
import ModalCom from "./modal";

const Containersoon = styled.div`
  justify-self: center;
`;
const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  margin-top: 15px;
  @media screen and (max-width: 1450px) {
    height: 200px;
  }
  @media screen and (max-width: 730px) {
    height: 300px;
  }
  @media screen and (max-width: 470px) {
    height: 240px;
  }
`;

interface Params {
  v: RealEstate;
  showbtn: boolean;
  deleteRealEstate?: (id: number) => void;
  updateStateRE?: (available: boolean, id: number) => void;
  idRealEstate?: number;
}

const ContentImg = ({
  v,
  showbtn,
  deleteRealEstate,
  updateStateRE,
  idRealEstate,
}: Params) => {
  const { isShown, toggle } = UseModal({ show: false });
  const { isShown: isShowTrue, toggle: toggleTrue } = UseModal({
    show: idRealEstate ? true : false,
  });

  return (
    <Containersoon>
      {idRealEstate == v.idrealestate ? (
        <ModalCom
          isShowTrue={isShowTrue}
          showbtn={showbtn}
          toggleTrue={toggleTrue}
          v={v}
          deleteRealEstate={deleteRealEstate}
          updateStateRE={updateStateRE}
        />
      ) : (
        <ModalCom
          isShowTrue={isShown}
          showbtn={showbtn}
          toggleTrue={toggle}
          v={v}
          deleteRealEstate={deleteRealEstate}
          updateStateRE={updateStateRE}
        />
      )}

      <Img onClick={toggle} src={v.url} alt="" />
    </Containersoon>
  );
};

export default ContentImg;
