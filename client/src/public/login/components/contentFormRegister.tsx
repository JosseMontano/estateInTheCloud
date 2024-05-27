import { ColorText } from "@/global/styles/globals";
import { MsgError, Input, Label } from "jz-validation-form";
import styled from "styled-components";
import Event from "@/global/interfaces/event";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  label {
    font-size: 18px;
  }
  input {
    padding: 5px;
    margin-top: 0px;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 95%;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);

  &:focus-within {
    border: 2px double rgba(7, 7, 204, 0.5);
  }
  input {
    border: none;
    background-color: transparent;
    width: 90%;
    padding: 5px;

    &:focus {
      outline: none;
    }
  }
  div {
    margin-top: 5px;
  }
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
      <ContainerInput>
          <input
          autoComplete="off"
          type={props.v.type}
          name={props.v.name}
          onChange={props.handleChange}
          value={props.v.value}
          required
        />
        <div onClick={props.handleShowPass}>
          <props.EyeJSX />
        </div>
      </ContainerInput>
    );
  }
  return (
    <Container>
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
    </Container>
  );
};

export default ContentFormRegister;
