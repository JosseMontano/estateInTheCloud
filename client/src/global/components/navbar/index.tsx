import {
  startTransition,
  Suspense,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Check from "./check";
import ContainerLinks from "./containerLinks";
import { useNameUser } from "@/global/context/nameUserContext";
import NameUser from "./nameUser";
import { getEmail } from "@/global/services/auth";
import AuxNav from "./auxNav";
import { useLanguage } from "@/global/context/languageContext";
import { ColorBtn, ColorBtnSecond, ColorBtnThird } from "@/global/styles/globals";
const Nav = styled.nav<{ ColorBtn: string }>`
  background: ${(props) => props.ColorBtn};
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
`;
const Logo = styled.label`
  color: ${ColorBtn};
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
  const { text } = useLanguage();
  const { nameUser, handlenameUser } = useNameUser();
  const [emailState, setEmailState] = useState("");
  const [textBig, setTextBig] = useState(false);
  const navigate = useNavigate();

  const CallGetEmail = async () => {
    const { email, id, user_name } = await getEmail();
    handlenameUser(user_name, id, email);
    setEmailState(email);
    if (user_name.length > 10) setTextBig(true);
  };

  const handleRedirect = (url: string) => {
    startTransition(() => {
      navigate(url);
    });
  };

  useEffect(() => {
    CallGetEmail();
  }, []);

  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <AuxNav margin={"1700px"} />
        <Nav ColorBtn={"#fff"}>
          <Check />
          <Logo onClick={() => handleRedirect("/home")}>
            <NameUser msg={text.navbarTitle} textBig={textBig} />
          </Logo>
          <ContainerLinks
            handleRedirect={handleRedirect}
            nameUser={nameUser}
            emailState={emailState}
          />
        </Nav>
      </Suspense>
    </>
  );
};

export default Index;
