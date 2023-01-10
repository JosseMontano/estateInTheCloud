import styled from "styled-components";
import Content from "./content";
import Img from "./img";
import { Comments as IComments } from "@/public/visitUser/interfaces/comments";
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
  idUser: number;
}

const Comments = ({ v, idUser }: Params) => {
  const sameUser = v.commentator === idUser;
  return (
    <Container>
      <Img url={v.url} />
      <Content {...v} />
      {sameUser && <DeleteComment id={v.id_comment} />}
    </Container>
  );
};

export default Comments;
