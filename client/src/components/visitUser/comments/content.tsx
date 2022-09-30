import styled from "styled-components";
import { Comments } from "../../../interface/comments";

const Container = styled.div`
  align-self: center;
`;
const NameUser = styled.h3`
  @media screen and (max-width: 732px) {
    text-align: center;
    font-size: 26px;
  }
`;
const Content = (v:Comments) => {
  return (
    <Container>
      <NameUser>{v.commentator}</NameUser>
      <p>
       {v.description}
      </p>
    </Container>
  );
};

export default Content;
