import { useLanguage } from "@/context/languageContext";
import styled from "styled-components";
import { Label } from "jz-validation-form";

const ChildSty = styled.div`
  margin-top: 10px;
`;
const ConAux = styled.div`
  display: flex;
  input {
    margin: 0px 5px;
  }
`;

interface Params {
  label: string;
  children: JSX.Element;
}

const Child = ({ children, label }: Params) => {
  return (
    <ChildSty>
      <Label>{label}</Label>
      <ConAux>{children}</ConAux>
    </ChildSty>
  );
};

export default Child;
