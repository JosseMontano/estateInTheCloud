import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Button } from "jz-validation-form";
import { FormRecuperateAccount } from "@/interface/formAuth";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
interface Params {
  onclick: any
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
