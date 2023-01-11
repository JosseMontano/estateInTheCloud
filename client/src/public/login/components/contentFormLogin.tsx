import React from "react";
import { ColorText } from "@/global/styles/globals";
import { Label, MsgError, Input } from "jz-validation-form";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 95%;
  border-radius: 3px;
  &:focus-within {
    border: 2px double rgba(7, 7, 204,.5) ;
  }
  input {
    border: none;
    background-color: transparent;
    width: 90%;
    &:focus {
      outline: none;
    }
  }
  div{
    margin-top: 5px;
  }
`;

interface V {
  label: string;
  name: string;
  value: string;
  errors: string;
  type: string;
}

interface Params {
  v: V;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleShowPass: () => void;
  EyeJSX: () => JSX.Element;
}

const ContentFormLogin = (props: Params) => {
  const isPassword = props.v.name === "password";
  function showInputPass() {
    return (
      <ContainerInput>
        <input
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
    <>
      <Label colorText={ColorText}>{props.v.label}</Label>
      {isPassword ? (
        showInputPass()
      ) : (
        <Input
          type={props.v.type}
          name={props.v.name}
          onChange={props.handleChange}
          value={props.v.value}
          required
        />
      )}

      {props.v.errors && <MsgError>{props.v.errors}</MsgError>}
    </>
  );
};

export default ContentFormLogin;
