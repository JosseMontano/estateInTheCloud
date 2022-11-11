import { useEffect, useState } from "react";
import styled from "styled-components";
import { Comments } from "@/interface/comments";
import { getUserById } from "@/services/user";
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
  return (
    <Container>
      <NameUser>{v.email}</NameUser>
      <p>{v.description}</p>
      <ShowStarts sizeStart={v.amount_start} />
    </Container>
  );
};

export default Content;
