import React, { SyntheticEvent } from "react";
import { Button } from "../../styles/globals";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
interface Params {
  onclick: ((e: React.FormEvent<HTMLFormElement>) => void) | any;
  color: string;
  text: string;
}
const Index = (v: Params) => {
  return (
    <Container>
      <Button onClick={v.onclick} ColorBtn={v.color}>
        {v.text}
      </Button>
    </Container>
  );
};

export default Index;
