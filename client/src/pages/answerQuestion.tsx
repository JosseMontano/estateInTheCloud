import styled from "styled-components";
import Card from "../styles/card";
import { getQuestions } from "../services/question";
import { useEffect, useState } from "react";
import { UseModal } from "../hooks/useModal";
import ModalCom from "../components/answerQuestion/modal";
import { useParams } from "react-router-dom";
import CardComponent from "../components/answerQuestion";
import IQuestion from "../interface/answerQuestion";

const Container = styled.div`
  width: calc(100%-15px);
  height: 100vh;
  padding: 15px;
`;

const AnswerQuestion = () => {
  const { id } = useParams();
  const IdNumber = parseInt(id!);
  const [data, setData] = useState<IQuestion[]>([]);
  const { isShown, toggle } = UseModal();
  const [idQuestion, setIdQuestion] = useState(0);
  const handleGetData = async () => {
    const resp = await getQuestions();
    setData(resp);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleClick = (id: number) => {
    toggle();
    setIdQuestion(id);
  };

  return (
    <Container>
      <Card>
        {data.map((v, i) => (
          <CardComponent key={i} v={v} handleClick={handleClick} />
        ))}
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
