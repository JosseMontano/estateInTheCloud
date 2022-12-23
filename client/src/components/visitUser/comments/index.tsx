import styled from "styled-components";
import { deleteComment } from "../../../services/comment";
import { useContext, useEffect, useState } from "react";
import Message from "../../global/message";
import { getCommentsByUser } from "@/services/comment";
import { NameUserContext } from "@/context/nameUserContext";
import LoadSkeleton from "./loadSkeleton";
import LoadComments from "./loadComments";
import { useLanguage } from "@/context/languageContext";
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
  const {text} = useLanguage();
  const [deleteBool, setDeleteBool] = useState(false);
  const { idUser } = useContext(NameUserContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleGetCommentedUser = async () => {
    const resp = await getCommentsByUser(idParam);
    setData(resp);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
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

  const showComments = () => {
    return (
      <LoadComments data={data} handleDelete={handleDelete} idUser={idUser} />
    );
  };

  return (
    <>
      <Title>{text.comentsTitle}</Title>
      <Container>{loading ? <LoadSkeleton /> : showComments()}</Container>
      {deleteBool && <Message msg="Se borro con exito" />}
    </>
  );
};

export default Index;
