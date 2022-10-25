import styled from "styled-components";
import { RealEstate } from "../../interface/realEstate";
import { Modal } from "../global/modal";
import { UseModal } from "../../hooks/useModal";
import { ContentModal } from "./contentModal";
import { useState } from "react";
import ContentCard from "./contentCard";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 380px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Index = (v: RealEstate) => {
  const { isShown, toggle } = UseModal();
  const navigate = useNavigate();
  const visitUser = (email: string) => navigate(`/visitUser/${v.email}`);
  return (
    <Container>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<ContentModal {...v} />}
      />

      <ContentCard
        toggle={toggle}
        v={v}
        visitUser={visitUser}
      />
    </Container>
  );
};
export default Index;
