import styled from "styled-components";
import { deleteComment } from "../../../services/comment";
import { useContext, useEffect, useState } from "react";
import Message from "../../global/message";
import Comments from "./comments";
import Skeleton from "./skeleton";
import { getCommentsByUser } from "@/services/comment";
import { NameUserContext } from "@/context/nameUser";

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
  idParam: number;
}

const Index = ({ idParam }: params) => {
  const [deleteBool, setDeleteBool] = useState(false);
  const { idUser } = useContext(NameUserContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleGetCommentedUser = async () => {
    const resp = await getCommentsByUser(idParam);
    setData(resp);
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
    <>
      <Title>Comentarios</Title>
      <Container>
        {loading
          ? [1, 2, 3, 4, 5].map((_, i) => <Skeleton key={i} />)
          : data.map((v, i) => (
              <Comments
                key={i}
                v={v}
                handleDeleteComment={handleDeleteComment}
                idUser={idUser}
              />
            ))}
      </Container>
      {deleteBool && <Message msg="Se borro con exito" />}
    </>
  );
};

export default Index;
