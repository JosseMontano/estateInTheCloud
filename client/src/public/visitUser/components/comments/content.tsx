import { useEffect, useState } from "react";
import styled from "styled-components";
import { Comments } from "@/public/visitUser/interfaces/comments";
import { getUserById } from "@/global/services/user";
import ShowStarts from "./showStarts";
import useTranslate from "../../hooks/useTranslate";

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
  const { descriptionState } = useTranslate({
    description: v.description,
  });
  return (
    <Container>
      <NameUser>{v.email}</NameUser>
      <p>{descriptionState}</p>
      <ShowStarts sizeStart={v.amount_start} />
    </Container>
  );
};

export default Content;
