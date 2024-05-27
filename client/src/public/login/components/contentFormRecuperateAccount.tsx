import React from "react";
import { Input, Label, MsgError } from "jz-validation-form";
import { ColorText } from "@/global/styles/globals";
import Event from "@/global/interfaces/event";
import styled from "styled-components";
interface V {
  label: string;
  name: string;
  value: string;
  errors: string;
}

interface Params {
  v: V;
  handleChange: (e: Event["htmlChange"]) => void;
}

const ContainerInput = styled.div`
  input{
    padding:5px;
  }
`;


const ContentFormRecuperateAccount = ({ v, handleChange }: Params) => {
  return (
    <>
      <Label colorText={ColorText}>{v.label}</Label>
     <ContainerInput>
     <Input
        type="text"
        name={v.name}
        onChange={handleChange}
        value={v.value}
        required
      />
     </ContainerInput>
      {v.errors && <MsgError>{v.errors}</MsgError>}
    </>
  );
};

export default ContentFormRecuperateAccount;
