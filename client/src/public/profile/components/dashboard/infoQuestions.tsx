import { useLanguage } from "@/global/context/languageContext";
import { Button, ColorBtnSecond } from "@/global/styles/globals";
import styled from "styled-components";
import { deleteQuestion, getQuestions } from "../../services/dashboard";
import { useEffect, useState } from "react";
import { showToast } from "@/global/utilities/toast";
import QuestionType from "@/public/answerQuestion/interfaces/question";

const Table = styled.table`
  width: 500px;
  border-collapse: collapse;

  thead {
    background: ${ColorBtnSecond};
    color: #fff;
    tr th {
      padding: 10px;
    }
  }

  tr td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    border: 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 15px;
    }

    td {
      text-align: right;
      padding-left: 50%;
      position: relative;
      text-align: right;

      &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 15px;
        font-weight: bold;
        text-align: left;
      }
    }
  }
`;

const InfoQuestions = () => {
  const { text } = useLanguage();
  const headers = [text.tableQuestion, text.tableUserActions];
  const [questions, setQuestion] = useState([] as QuestionType[]);

  const handleGetQuestions = async () => {
    const { json } = await getQuestions<QuestionType[]>();
    setQuestion(json);
  };

  const handleDelete = async (id: number) => {
    await deleteQuestion(id);

    //delete the user from the list
    const updateQuestions = questions.filter((v) => v.id !== id);
    setQuestion(updateQuestions);
    showToast(text.msgDataDeleted);
  };

  useEffect(() => {
    handleGetQuestions();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {questions.map((v) => (
          <tr key={v.id}>
            <td>{v.question}</td>
            <td>
              <Button
                onClick={() => handleDelete(v.id ?? 0)}
                ColorBtn={ColorBtnSecond}
                padding
              >
                {text.tableMsgDelete}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InfoQuestions;
