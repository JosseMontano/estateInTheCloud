import React, { useContext } from "react";
import styled from "styled-components";
import Content from "./content";
import Img from "./img";
import { Comments as IComments } from "../../../interface/comments";
import { NameUserContext } from "../../../context/nameUser";
import DeleteComment from "./deleteComment";

const Container = styled.div`
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

interface Params {
  v: IComments;
  handleDeleteComment: (id: number) => {};
}

const Comments = ({ v, handleDeleteComment }: Params) => {
  const { idUser } = useContext(NameUserContext);

  return (
    <Container>
      <Img commentator={v.commentator} />
      <Content {...v} />
      {v.commentator === idUser && (
        <DeleteComment handleDeleteComment={handleDeleteComment} id={v.id} />
      )}
    </Container>
  );
};

export default Comments;
