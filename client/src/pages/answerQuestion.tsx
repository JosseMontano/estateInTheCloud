import styled from "styled-components";
import AnswerIcon from "../icons/answer";
import { Table } from "../styles/table";
import { getQuestions } from "../services/question";
import { useEffect, useState } from "react";
import { UseModal } from "../hooks/modal/useModal";
import ModalCom from "../components/answerQuestion/modal";
import { useParams } from "react-router-dom";
const Container = styled.div`
  width: calc(100%-15px);
  height: 100vh;
  padding: 15px;
`;

interface Question {
  id: number;
  question: string;
}

const AnswerQuestion = () => {
  const { id } = useParams();
  const IdNumber = parseInt(id!);
  const [data, setData] = useState<Question[]>([]);
  const { isShown, toggle } = UseModal();
const [idQuestion, setIdQuestion] = useState(0)
  const handleGetData = async () => {
    const resp = await getQuestions();
    setData(resp);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const getId = (idAns:number) => {
    setIdQuestion(idAns);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Pregunta</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>
          {data.map((v, i) => (
            <tr key={i}>
              <td>{v.question}</td>
              <td>
                <AnswerIcon toggle={toggle} id={v.id} getId={getId} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalCom toggle={toggle} isShown={isShown} id={IdNumber} idQuestion={idQuestion} />
    </Container>
  );
};

export default AnswerQuestion;
