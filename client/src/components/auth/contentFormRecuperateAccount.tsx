import React from "react";
import { Input, Label, MsgError } from "jz-validation-form";
import { ColorText } from "@/styles/globals";
interface V {
  label: string;
  name: string;
  value: any;
  errors: any;
}

interface Params {
  v: V;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ContentFormRecuperateAccount = ({ v, handleChange }: Params) => {
  return (
    <>
      <Label colorText={ColorText}>{v.label}</Label>
      <Input
        type="text"
        name={v.name}
        onChange={handleChange}
        value={v.value}
        required
      />
      {v.errors && <MsgError>{v.errors}</MsgError>}
    </>
  );
};

export default ContentFormRecuperateAccount;
