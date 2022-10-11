import styled from "styled-components";
import { RealEstate } from "../../interface/realEstate";
import { Modal } from "../../hooks/modal/modal";
import { UseModal } from "../../hooks/modal/useModal";
import { ContentModal } from "./contentModal";
import { Link } from "react-router-dom";
import ModalQuestion from "./modalQuestion";
import { useState } from "react";
const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 380px;
  &:hover {
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  padding: 2px 16px;
  margin: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const H4 = styled.h4`
  font-size: 22px;
  color: #fff;
`;
const P = styled.p`
  font-size: 18px;
  color: #fff;
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: end;
`;
const Btn = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-left: 15px;
`;
const Index = (v: RealEstate) => {
  const { isShown, toggle } = UseModal();
  const [showModalQuestion, setShowModalQuestion] = useState(false);
  const toggleModalQuestion = () => setShowModalQuestion(!showModalQuestion);
  return (
    <Container>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<ContentModal {...v} />}
      />

      <Modal
        isShown={showModalQuestion}
        hide={toggleModalQuestion}
        modalContent={<ModalQuestion />}
      />

      <Content>
        <Img className="img" src={v.url} alt="Avatar" />
        <H4>{v.title}</H4>
        <P>{v.email}</P>
        <ContainerBtn>
          <Btn onClick={toggle}>Saber mas</Btn>
          <Btn onClick={toggleModalQuestion}>Preguntas</Btn>
          <Btn>
            <Link to={`/visitUser/${v.email}`}>Ver mas</Link>
          </Btn>
        </ContainerBtn>
      </Content>
    </Container>
  );
};
export default Index;
