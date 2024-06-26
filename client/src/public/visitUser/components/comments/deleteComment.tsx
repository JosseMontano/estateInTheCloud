import styled from "styled-components";
import { useLanguage } from "@/global/context/languageContext";
import { useComments } from "@/public/visitUser/context/commentsContext";
import { ColorBtn, ColorBtnSecond } from "@/global/styles/globals";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  background-color: ${ColorBtnSecond};
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  width: auto;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: ${ColorBtn};
  }
`;

interface Params {
  id: number;
}

const DeleteComment = ({ id }: Params) => {
  const { text } = useLanguage();
  const { handleDelete } = useComments();

  return (
    <Container>
      <Button onClick={() => handleDelete(id)}>{text.comentsDelete}</Button>
    </Container>
  );
};

export default DeleteComment;
