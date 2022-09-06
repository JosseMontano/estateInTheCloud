import styled from "styled-components";
import {
  ColorBtn,
  Input,
  Label,
  ColorBtnSecond,
  ColorText,
} from "../../styles/globals";
import { signIn } from "../../services/auth";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../toast";
import { codeToken } from "../../utilities/code";
import Button from "./button";
const Container = styled.form``;

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [flag, setFlag] = useState(false);
  const [msg, setMsg] = useState("Datos erroneos");
  const navigate = useNavigate();

  const handleSignIn = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await signIn(email, password);
    if (res.auth) {
      setMsg("Datos correctos");
      codeToken(res.token);
      navigate(`/home`);
    }
    setFlag(true);
  };

  const handleSignUp = async (e: SyntheticEvent) => {
    navigate(`/register`);
  };

  const handleFunc = () => {
    setFlag(false);
  };

  let data = [
    {
      onclick: handleSignIn,
      color: ColorBtnSecond,
      text: "Ingresar",
    },
    {
      onclick: handleSignUp,
      color: ColorBtn,
      text: "Create una cuenta",
    },
  ];
  return (
    <Container>
      <Label colorText={ColorText}>Gmail</Label>
      <Input type="text" onChange={(e) => setEmail(e.target.value)} />
      <Label colorText={ColorText}>Contraseña</Label>
      <Input type="text" onChange={(e) => setPassword(e.target.value)} />

      {data.map((v, i) => (
        <Button key={i} {...v} />
      ))}

      <Toast msg={msg} flag={flag ? true : false} handleFunc={handleFunc} />
    </Container>
  );
};

export default Form;
