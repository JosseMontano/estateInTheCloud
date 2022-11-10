import styled from "styled-components";
import { deleteComment } from "../../../services/comment";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../../../services/user";
import { CommentsContext } from "../../../context/comments";
import Message from "../../global/message";
import Comments from "./comments";
import Skeleton from "./skeleton";
const Container = styled.div`
  margin: 0 10%;
  @media screen and (max-width: 1050px) {
    margin: 0;
  }
`;
const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 15px;
`;

interface params {
  email: string | undefined;
}

const Index = ({ email }: params) => {
  const [deleteBool, setDeleteBool] = useState(false);
  const { comments, getComments } = useContext(CommentsContext);
  const [loading, setLoading] = useState(true);

  const handleGetCommentedUser = async () => {
    const { json } = await getUser(email);
    const obj = Object.assign({}, json);
    await getComments(obj[0].id_usuario);
    setLoading(false);
  };

  const handleDeleteComment = async (id: number) => {
    await deleteComment(id);
    handleGetCommentedUser();
    setDeleteBool(true);
    setTimeout(() => {
      setDeleteBool(false);
    }, 3000);
  };

  useEffect(() => {
    handleGetCommentedUser();
  }, []);

  return (
    <div>
      <Title>Comentarios</Title>
      <Container>
        {loading
          ? [1, 2, 3, 4, 5].map((_, i) => <Skeleton key={i} />)
          : comments.map((v, i) => (
              <Comments
                key={i}
                v={v}
                handleDeleteComment={handleDeleteComment}
              />
            ))}
      </Container>
      {deleteBool && <Message msg="Se borro con exito" />}
    </div>
  );
};

export default Index;
