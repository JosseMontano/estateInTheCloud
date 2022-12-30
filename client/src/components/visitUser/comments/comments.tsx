import styled from "styled-components";
import Content from "./content";
import Img from "./img";
import { Comments as IComments } from "@/interface/comments";
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
  idUser:number
}

const Comments = ({ v, idUser }: Params) => {

  return (
    <Container>
      <Img url={v.url} />
      <Content {...v} />
      {v.commentator === idUser && (
        <DeleteComment id={v.id_comment} />
      )}
    </Container>
  );
};

export default Comments;
