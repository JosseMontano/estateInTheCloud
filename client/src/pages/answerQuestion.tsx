import styled from "styled-components";
import Card from "../styles/card";
import { useState } from "react";
import { UseModal } from "../hooks/useModal";
import ModalCom from "../components/answerQuestion/modal";
import { useParams } from "react-router-dom";
import CardComponent from "../components/answerQuestion";
import Navbar from "../components/navbar";
import AuxNav from "../components/navbar/auxNav";
import useLoadData from "../hooks/useLoadData";
import { getQuestions } from "../services/question";
const Container = styled.div`
  width: calc(100%-15px);
  height: 100vh;
  padding: 15px;
`;

const AnswerQuestion = () => {
  const { data, loading } = useLoadData(getQuestions);
  const { id } = useParams();
  const IdNumber = parseInt(id!);

  const { isShown, toggle } = UseModal();
  const [idQuestion, setIdQuestion] = useState(0);

  const handleClick = (id: number) => {
    toggle();
    setIdQuestion(id);
  };

  return (
    <Container>
      <Navbar />
      <AuxNav margin={"1700px"} />
      <Card>
        {loading ? (
          <p>Cargando</p>
        ) : (
          data.map((v, i) => (
            <CardComponent key={i} v={v} handleClick={handleClick} />
          ))
        )}
      </Card>

      <ModalCom
        toggle={toggle}
        isShown={isShown}
        id={IdNumber}
        idQuestion={idQuestion}
      />
    </Container>
  );
};

export default AnswerQuestion;
