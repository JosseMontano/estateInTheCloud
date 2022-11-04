import styled from "styled-components";
import Card from "../styles/card";
import { useState } from "react";
import { UseModal } from "../hooks/useModal";
import ModalCom from "../components/answerQuestion/modal";
import { useParams } from "react-router-dom";
import CardComponent from "../components/answerQuestion";
import useLoadData from "../hooks/useLoadDataParams";
import { getQuestions } from "../services/question";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
const Container = styled.div`
  width: calc(100%-15px);
  height: 100vh;
`;

interface Params {
  showNavbar: JSX.Element;
}

const AnswerQuestion = ({ showNavbar }: Params) => {
  const { id } = useParams();
  const IdNumber = parseInt(id!);
  const { data, loading } = useLoadData(getQuestions, IdNumber);
  const {} = useVerifyUserLogin();

  const { isShown, toggle } = UseModal();
  const [idQuestion, setIdQuestion] = useState(0);

  const handleClick = (id: number) => {
    toggle();
    setIdQuestion(id);
  };

  return (
    <Container>
      {showNavbar}
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
