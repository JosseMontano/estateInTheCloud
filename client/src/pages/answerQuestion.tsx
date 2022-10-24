import styled from "styled-components";
import AnswerIcon from "../icons/answer";
import { Table } from "../styles/table";
import { getQuestions } from "../services/question";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: calc(100%-15px);
  height: 100vh;
  padding: 15px;
`;

interface Question {
  question: string;
}

const AnswerQuestion = () => {
  const [data, setData] = useState<Question[]>([]);
  const handleGetData = async () => {
    const resp = await getQuestions();
    setData(resp);
  };

  useEffect(() => {
    handleGetData();
  }, []);
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
                <AnswerIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AnswerQuestion;
