import styled from "styled-components";
import { useEffect } from "react";
import Message from "@/global/components/message";
import { useNameUser } from "@/context/nameUserContext";
import LoadSkeleton from "./loadSkeleton";
import LoadComments from "./loadComments";
import { useLanguage } from "@/context/languageContext";
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
  const { idUser } = useNameUser();
  const { data, setIdCommentUser, loading, deleteCommentState } = useComments();

  useEffect(() => {
    setIdCommentUser(idParam);
  }, []);

  function showComments() {
    if (data) {
      const newData = data.getAllCommentsByUser;
      return <LoadComments data={newData} idUser={idUser} />;
    }
  }

  return (
    <>
      <Title>{text.comentsTitle}</Title>
      <Container>{loading ? <LoadSkeleton /> : showComments()}</Container>

      {deleteCommentState && <Message msg="Se borro con exito" />}
    </>
  );
};

export default Index;
