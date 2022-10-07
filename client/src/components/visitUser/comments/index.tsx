import styled from "styled-components";
import Content from "./content";
import Img from "./img";
import { getCommentsByUser, deleteComment } from "../../../services/comment";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../../../services/user";
import { Comments } from "../../../interface/comments";
import { NameUserContext } from ".././../../context/nameUser";
import Message from "../../message";
const ContentSoon = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin-top: 15px;
  @media screen and (max-width: 870px) {
    grid-template-columns: 30% 70%;
  }
  @media screen and (max-width: 732px) {
    grid-template-columns: 1fr;
  }
`;
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
const ContainerBtn = styled.div`
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
interface params {
  email: string | undefined;
}

const Index = (params: params) => {
  const [data, setData] = useState<Comments[]>([]);
  const [deleteBool, setDeleteBool] = useState(false);
  const { idUser } = useContext(NameUserContext);
  const handleGetComments = async (id: number) => {
    const resp = await getCommentsByUser(id);
    setData(resp);
  };

  const handleGetCommentedUser = async () => {
    const resp = await getUser(params.email);
    const obj = Object.assign({}, resp);
    const idUserConst = obj[0].id_usuario;
    handleGetComments(idUserConst);
  };

  const handleDeleteComment = async (id: number) => {
    //delete comments
    const res = await deleteComment(id);
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
        {data.map((v, i) => (
          <ContentSoon key={i}>
            <Img commentator={v.commentator} />
            <Content {...v} />
            {v.commentator === idUser && (
              <ContainerBtn>
                <Button onClick={() => handleDeleteComment(v.id)}>
                  Eliminar Comentario
                </Button>
              </ContainerBtn>
            )}
          </ContentSoon>
        ))}
      </Container>
      {deleteBool && <Message msg="En los proximos minutos sera eliminado" />}
    </div>
  );
};

export default Index;
