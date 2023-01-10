import React from "react";
import { ColorBtn } from "@/styles/globals";
import { Input, Button, MsgError } from "jz-validation-form";
import { useLanguage } from "@/context/languageContext";

interface params {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sendData: (e: any) => void;
  val: string;
  err: string;
}
const Form = (p: params) => {
  const {text} = useLanguage()
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
      <Button ColorBtn={ColorBtn} onClick={(e: any) => p.sendData(e)}>
        {text.questionBtnSave}
      </Button>
    </>
  );
};

export default Form;
