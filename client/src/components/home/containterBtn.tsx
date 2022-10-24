import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: end;
`;
const Btn = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-left: 15px;
`;

interface Params {
  email: string;
  toggle: () => void;
  toggleModalQuestion: () => void;
  visitUser: (email: string) => void;
}

const ContainterBtn = (params: Params) => {
  let data = [
    {
      name: "Saber mas",
      click: params.toggle,
    },
    {
      name: "Preguntas",
      click: params.toggleModalQuestion,
    },
    {
      name: "Ver mas",
      click: () => params.visitUser(params.email),
    },
  ];

  return (
    <Container>
      {data.map((v, i) => (
        <Btn key={i} onClick={v.click}>{v.name}</Btn>
      ))}
    </Container>
  );
};

export default ContainterBtn;
