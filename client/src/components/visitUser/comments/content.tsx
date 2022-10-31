import { useEffect, useState } from "react";
import styled from "styled-components";
import { Comments } from "../../../interface/comments";
import { getUserById } from "../../../services/user";
import ShowStarts from "./showStarts";

const Container = styled.div`
  align-self: center;
`;
const NameUser = styled.h3`
  @media screen and (max-width: 732px) {
    text-align: center;
    font-size: 26px;
  }
`;
const Content = (v: Comments) => {
  const [email, setEmail] = useState("");
  const handleGetUser = async () => {
    const res = await getUserById(v.commentator);
    const objRes = Object.assign({}, res[0]);
    const auxUrl = objRes.email;
    setEmail(auxUrl);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Container>
      <NameUser>{email}</NameUser>
      <p>{v.description}</p>
      <span>{v.amount_start}</span>
      <ShowStarts />
    </Container>
  );
};

export default Content;
