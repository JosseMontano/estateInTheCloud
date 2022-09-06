import styled from "styled-components";
import {
  ColorBtn,
  Input,
  Label,
  ColorBtnSecond,
  ColorText,
} from "../../styles/globals";
import { signUp } from "../../services/auth";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../toast";
import { codeToken } from "../../utilities/code";
import Button from "./button";

const Container = styled.form``;

const Form = () => {
  const [userName, setuserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [flag, setFlag] = useState(false);
  const [msg, setMsg] = useState("Datos erroneos");
  const navigate = useNavigate();

  const handleSignUp = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await signUp(userName, email, password);
    if (res.auth) {
      setMsg("Cuenta creada");
      codeToken(res.token);
      navigate(`/`);
    }
    setFlag(true);
  };

  const handleComeBack = async (e: SyntheticEvent) => {
    navigate(`/`);
  };

  const handleFunc = () => {
    setFlag(false);
  };

  let data = [
    {
      onclick: handleSignUp,
      color: ColorBtnSecond,
      text: "Crear cuenta",
    },
    {
      onclick: handleComeBack,
      color: ColorBtn,
      text: "Volver",
    },
  ];
  return (
    <Container>
      <Label colorText={ColorText}>Gmail</Label>
      <Input type="text" onChange={(e) => setEmail(e.target.value)} />
      <Label colorText={ColorText}>Nombre de usuario</Label>
      <Input type="text" onChange={(e) => setuserName(e.target.value)} />
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
