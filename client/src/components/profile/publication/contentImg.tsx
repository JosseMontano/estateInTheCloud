import styled from "styled-components";
import { UseModal } from "@/hooks/useModal";
import { Modal } from "../../global/modal";
import { RealEstate } from "@/interface/realEstate";
import { ContentModal } from "./indexModal";
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
  deleteRealEstate: (id: number) => void;
}

const ContentImg = ({ v, showbtn, deleteRealEstate }: Params) => {
  const { isShown, toggle } = UseModal();

  return (
    <Containersoon>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={
          <ContentModal
            v={v}
            showbtn={showbtn}
            deleteRealEstate={deleteRealEstate}
          />
        }
      />

      <Img onClick={toggle} src={v.url} alt="" />
    </Containersoon>
  );
};

export default ContentImg;
