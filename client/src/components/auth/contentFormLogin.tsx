import React from "react";
import { ColorText, ErrorCss, Input, Label } from "@/styles/globals";

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

const ContentFormLogin = ({ v, handleChange }: Params) => {
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
      {v.errors && <ErrorCss>{v.errors}</ErrorCss>}
    </>
  );
};

export default ContentFormLogin;
