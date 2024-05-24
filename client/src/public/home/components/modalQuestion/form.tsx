import React from "react";
import { ColorBtn } from "@/global/styles/globals";
import { Input, Button, MsgError } from "jz-validation-form";
import { useLanguage } from "@/global/context/languageContext";
import styled from "styled-components";

interface params {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sendData: (e: any) => void;
  val: string;
  err: string;
}

const ContainerBtn = styled.div`
  width: 130px;
  & button{
    height: 35px;
    padding: 5px;

  }
  
`

const Form = (p: params) => {
  const { text } = useLanguage()
  return (
    <>
      <Input
        type="text"
        name={"question"}
        onChange={p.handleChange}
        value={p.val}
        placeholder={text.questionPlaceholder}
      />
      {p.err && <MsgError>{p.err}</MsgError>}
      <ContainerBtn>
        <Button ColorBtn={ColorBtn} onClick={(e: any) => p.sendData(e)}>
          {text.questionBtnSave}
        </Button>
      </ContainerBtn>

    </>
  );
};

export default Form;
