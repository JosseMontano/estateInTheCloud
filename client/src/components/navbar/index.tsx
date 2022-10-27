import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Check from "./check";
import ContainerLinks from "./containerLinks";
import { NameUserContext } from "../../context/nameUser";
import NameUser from "./nameUser";
import { getEmail } from "../../services/auth";

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
  const [emailState, setEmailState] = useState("");
  const [textBig, setTextBig] = useState(false);
  const navigate = useNavigate();

  const CallGetEmail = async () => {
    const { email, id, username } = await getEmail();
    handlenameUser(username, id);
    setEmailState(email);
    if (username.length > 10) setTextBig(true);
  };

  const handleRedirect = () => {
    navigate(`/profile/${emailState}`);
  };

  useEffect(() => {
    CallGetEmail();
  }, []);

  return (
    <>
      <Nav ColorBtn={"#162b33"}>
        <Check />
        <Logo onClick={() => handleRedirect()}>
          <NameUser msg={nameUser} textBig={textBig} />
        </Logo>
        <ContainerLinks />
      </Nav>
    </>
  );
};

export default Index;
