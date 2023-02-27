import styled from "styled-components";
import { useModal } from "jz-modal";
import { RealEstate } from "@/global/interfaces/realEstate";
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
  idRealEstate?: number;
}

const ContentImg = ({ v, showbtn, idRealEstate }: Params) => {
  const { isShown, toggle } = useModal({ show: false });
  const { isShown: isShowTrue, toggle: toggleTrue } = useModal({
    show: idRealEstate ? true : false,
  });

  return (
    <Containersoon>
      {idRealEstate == v.id_real_estate ? (
        <ModalCom
          isShowTrue={isShowTrue}
          showbtn={showbtn}
          toggleTrue={toggleTrue}
          v={v}
        />
      ) : (
        <ModalCom
          isShowTrue={isShown}
          showbtn={showbtn}
          toggleTrue={toggle}
          v={v}
        />
      )}

      <Img onClick={toggle} src={v.url} alt="" />
    </Containersoon>
  );
};

export default ContentImg;
