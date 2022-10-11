import React from "react";
import { Button, ColorBtn, ErrorCss, Input } from "../../../styles/globals";

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
      {p.err && <ErrorCss>{p.err}</ErrorCss>}
      <Button ColorBtn={ColorBtn} onClick={(e: any) => p.sendData(e)}>
        Haz tu propia pregunta
      </Button>
    </>
  );
};

export default Form;
