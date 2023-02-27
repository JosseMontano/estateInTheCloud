import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardCom from "@/public/home/components/contentCard";
import { RealEstate } from "@/global/interfaces/realEstate";
import { Modal, useModal } from "jz-modal";
import { ContentModal } from "@/public/home/components/modal/contentModal";

export const ContainerSoon = styled.div`
  width: 300px;
  height: 400px;
`;

interface Params {
  v: RealEstate;
}

const Card = ({ v }: Params) => {
  const navigate = useNavigate();
  const visitUser = () => navigate(`/visitUser/${v.id_user}/${v.email}`);
  const { isShown, toggle } = useModal({});

  return (
    <ContainerSoon>
      <CardCom v={v} toggle={toggle} visitUser={visitUser} />
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<ContentModal {...v} />}
      />
    </ContainerSoon>
  );
};

export default Card;
