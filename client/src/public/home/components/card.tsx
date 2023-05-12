import { useModal, Modal } from "jz-modal";
import { RealEstate } from "@/global/interfaces/realEstate";
import styled from "styled-components";

import ContentCard from "./contentCard";
import { ContentModal } from "./modal/contentModal";

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 380px;
  &:hover {
    transform: scale(1.1);
  }
`;

interface ParamsType {
  v: RealEstate;
  visitUser: (idUser: number, email: string) => void;
  addFavorite: (realEstateId: number) => void;
}

const Index = ({ v, visitUser, addFavorite }: ParamsType) => {
  const { isShown, toggle } = useModal({});
  return (
    <Container>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<ContentModal {...v} />}
      />
      <ContentCard toggle={toggle} v={v} visitUser={visitUser} addFavorite={addFavorite} />
    </Container>
  );
};
export default Index;
