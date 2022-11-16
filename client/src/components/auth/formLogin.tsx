import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import ContentFormLogin from "./contentFormLogin";
import LoadingAndResponse from "../dynamic/loadingAndResponse";

const Container = styled.form``;

interface BtnType {
  onclick: (e: any) => void;
  color: string;
  text: string;
}

interface DataformType {
  label: string;
  name: string;
  value: any;
  errors: any;
}

interface ParamsType {
  msg: string;
  dataForm: DataformType[];
  dataBtn: BtnType[];
  loading: boolean;
  response: boolean;
  handleChange: (e: any) => void;
}

const Form = (props: ParamsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.msg === "El proceso fue exitoso") {
      navigate("/home");
    }
  }, [props.msg]);

  return (
    <Container>
      {props.dataForm.map((v, i) => (
        <ContentFormLogin key={i} v={v} handleChange={props.handleChange} />
      ))}
      {props.dataBtn.map((v, i) => (
        <Button key={i} {...v} />
      ))}
      <LoadingAndResponse
        loading={props.loading}
        msg={props.msg}
        response={props.response}
      />
    </Container>
  );
};

export default Form;
