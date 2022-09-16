import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Check from "./check";
import ContainerLinks from "./containerLinks";
import { HandlerGetNameUser, HandlerGetEmail, HandlerGetId } from "./getEmail";
import { NameUserContext } from "../../context/nameUser";
const Nav = styled.nav<{ ColorBtn: string }>`
  background: ${(props) => props.ColorBtn};
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
`;
const Logo = styled.label`
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;

  @media (max-width: 952px) {
    font-size: 30px;
    padding-left: 50px;
  }
`;

const Index = () => {
  const { nameUser, handlenameUser } = useContext(NameUserContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const CallGetEmail = async () => {
    const nameAux = await HandlerGetNameUser();
    const emailAux = await HandlerGetEmail();
    const idAux = await HandlerGetId();
    setEmail(emailAux);
    handlenameUser(nameAux, idAux);
    setLoading(false);
  };
  const handleRedirect = () => {
    navigate(`/profile/${email}`);
  };
  useEffect(() => {
    CallGetEmail();
  }, []);
  return (
    <>
      <Nav ColorBtn={"#162b33"}>
        <Check />
        <Logo onClick={() => handleRedirect()}>
          {loading ? <span>cargando</span> : nameUser}
        </Logo>
        <ContainerLinks />
      </Nav>
    </>
  );
};

export default Index;
