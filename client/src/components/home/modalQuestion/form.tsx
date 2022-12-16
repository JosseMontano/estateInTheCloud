import React from "react";
import { ColorBtn } from "@/styles/globals";
import { Input, Button, MsgError } from "jz-validation-form";
interface params {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sendData: (e: any) => void;
  val: string;
  err: string;
}
const Form = (p: params) => {
  return (
    <>
      <Input
        type="text"
        name={"question"}
        onChange={p.handleChange}
        value={p.val}
        placeholder={"pregunta"}
      />
      {p.err && <MsgError>{p.err}</MsgError>}
      <Button ColorBtn={ColorBtn} onClick={(e: any) => p.sendData(e)}>
        Haz tu propia pregunta
      </Button>
    </>
  );
};

export default Form;
