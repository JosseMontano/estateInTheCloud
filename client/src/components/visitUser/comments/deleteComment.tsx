import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #6c7da7;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  width: auto;
  margin-top: 10px;
  font-size: 16px;
  &:hover {
    transform: scale(1.1);
    background-color: #859ad0;
  }
`;

interface Params {
  handleDeleteComment: (id: number) => {};
  id: number;
}

const DeleteComment = ({ handleDeleteComment, id }: Params) => {
  return (
    <Container>
      <Button onClick={() => handleDeleteComment(id)}>
        Eliminar Comentario
      </Button>
    </Container>
  );
};

export default DeleteComment;
