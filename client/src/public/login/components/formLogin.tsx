import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import ContentFormLogin from "./contentFormLogin";
import LoadingAndResponse from "@/global/components/toast/loadAndResponse";
import Language from "@/global/components/language";


const Container = styled.form``;

interface BtnType {
  onclick: (e: any) => void;
  color: string;
  text: string;
}

interface DataformType {
  label: string;
  name: string;
  value: string;
  errors: string;
  type: string;
}

interface ParamsType {
  msg: string;
  dataForm: DataformType[];
  dataBtn: BtnType[];
  loading: boolean;
  response: boolean;
  handleChange: (e: any) => void;
  handleShowPass: () => void;
  EyeJSX: () => JSX.Element;
}

const Form = (props: ParamsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.msg === "El proceso fue exitoso") {
      navigate("/home");
      location.reload();
    }
  }, [props.msg]);

  return (
    <Container>
      {props.dataForm.map((v, i) => (
        <ContentFormLogin
          key={i}
          v={v}
          handleChange={props.handleChange}
          handleShowPass={props.handleShowPass}
          EyeJSX={props.EyeJSX}
        />
      ))}
      {props.dataBtn.map((v, i) => (
        <Button key={i} {...v} />
      ))}

      <Language />

      <LoadingAndResponse
        loading={props.loading}
        msg={props.msg}
        response={props.response}
      />
    </Container>
  );
};

export default Form;
