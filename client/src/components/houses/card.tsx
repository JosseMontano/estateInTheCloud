import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardCom from "@/components/home/contentCard";
import { RealEstate } from "@/interface/realEstate";
import { Modal } from "../global/modal";
import { ContentModal } from "../home/contentModal";
import { UseModal } from "@/hooks/useModal";

export const ContainerSoon = styled.div`
  width: 300px;
  height: 400px;
`;

interface Params {
  v: RealEstate;
}

const Card = ({ v }: Params) => {
  const navigate = useNavigate();
  const visitUser = () => navigate(`/visitUser/${v.iduser}/${v.email}`);
  const { isShown, toggle } = UseModal({});
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
