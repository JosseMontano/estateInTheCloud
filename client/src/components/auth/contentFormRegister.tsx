import { ColorText } from "@/styles/globals";
import { MsgError, Input, Label } from "jz-validation-form";
import styled from "styled-components";
import { FormRegister } from "@/interface/formAuth";
import Event from "@/interface/event";

const ContainerEye = styled.div`
  & svg {
    position: relative;
    bottom: 50px;
    left: 320px;
    margin-bottom: -32px;
  }
  position: absolute;
`;
interface V {
  label: string;
  name: string;
  value: string;
  errors: string;
  placeHolder: string;
  type: string;
}

interface Params {
  v: V;
  handleChange: (e: Event["htmlChange"]) => void;
  EyeJSX: () => JSX.Element;
  handleShowPass: () => void;
}

const ContentFormRegister = (props: Params) => {
  function showInputPassword() {
    return (
      <>
        <Input
          type={props.v.type}
          name={props.v.name}
          onChange={props.handleChange}
          value={props.v.value}
          required
        />
        <ContainerEye onClick={props.handleShowPass}>
          <props.EyeJSX />
        </ContainerEye>
      </>
    );
  }
  return (
    <>
      <Label colorText={ColorText}>{props.v.label}</Label>
      {props.v.name === "password" ? (
        showInputPassword()
      ) : (
        <Input
          type="text"
          name={props.v.name}
          onChange={props.handleChange}
          value={props.v.value}
          placeholder={props.v.placeHolder}
          required
        />
      )}

      {props.v.errors && <MsgError>{props.v.errors}</MsgError>}
    </>
  );
};

export default ContentFormRegister;
