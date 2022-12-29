import styled from "styled-components";
import { deleteComment } from "../../../services/comment";
import { useContext, useEffect, useState } from "react";
import Message from "../../global/message";
import { getCommentsByUser } from "@/services/comment";
import { NameUserContext } from "@/context/nameUserContext";
import LoadSkeleton from "./loadSkeleton";
import LoadComments from "./loadComments";
import { useLanguage } from "@/context/languageContext";
import { useMutation, useQuery } from "@apollo/client";
import { useComments } from "@/context/comments/commentsContext";
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
  const { text } = useLanguage();
  const [deleteBool, setDeleteBool] = useState(false);
  const { idUser } = useContext(NameUserContext);
  const [DELETE_COMMENT] = useMutation(deleteComment());
  const { data, setIdCommentUser, loading, handleDelete } = useComments();
  /*   const id = getCommentsByUser(idParam);
  const { data, loading, error } = useQuery(id); */

/*   const handleDelete = async (id: number) => {
    DELETE_COMMENT({ variables: { id } });
    setDeleteBool(true);
    setTimeout(() => {
      setDeleteBool(false);
    }, 3000);
  }; */

  useEffect(() => {
    setIdCommentUser(idParam)
  }, []);

  function showComments() {
    if (data) {
      const newData = data.getAllCommentsByUser;
      return (
        <LoadComments
          data={newData}
          handleDelete={handleDelete}
          idUser={idUser}
        />
      );
    }
  }

  return (
    <>
      <Title>{text.comentsTitle}</Title>
      <Container>{loading ? <LoadSkeleton /> : showComments()}</Container>
      {deleteBool && <Message msg="Se borro con exito" />}
    </>
  );
};

export default Index;
