import styled from "styled-components";
import Content from "./content";
import Img from "./img";
import { getCommentsByUser } from "../../../services/comment";
import { useEffect, useState } from "react";
import { getUser } from "../../../services/user";
import { Comments } from "../../../interface/comments";

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

interface params {
  email: string | undefined;
}

const Index = (params: params) => {

  const [data, setData] = useState<Comments[]>([]);

  const handleGetComments = async (id: number) => {
    const resp = await getCommentsByUser(id);
    setData(resp);
  };

   const handleGetCommentedUser = async () => {
    const resp = await getUser(params.email);
    const obj = Object.assign({}, resp);
    const idUser = obj[0].id_usuario;
    handleGetComments(idUser);
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
            <Img commentator={v.commentator}/>
            <Content {...v} />
          </ContentSoon>
        ))}
      </Container>
    </div>
  );
};

export default Index;
