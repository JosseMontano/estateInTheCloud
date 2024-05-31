import { startTransition, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Check from "./check";
import ContainerLinks from "./containerLinks";
import { useNameUser } from "@/global/context/nameUserContext";
import NameUser from "./nameUser";
import { getEmail } from "@/global/services/auth";
import AuxNav from "./auxNav";
import { useLanguage } from "@/global/context/languageContext";
import { ColorBtn } from "@/global/styles/globals";
import Header from "@/public/home/components/header";
import { currentLink } from "@/global/interfaces/nav";
import { Toaster } from "react-hot-toast";

const Container = styled.div`
  position: fixed;
  top: 0px;
  z-index: 999;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;

const Nav = styled.nav<{ ColorBtn: string }>`
  background: ${(props) => props.ColorBtn};
  height: 80px;
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

interface Params {
  isHome?: boolean;
}

const Index = ({ isHome }: Params) => {
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

  const [currentLink, setCurrentLink] = useState<currentLink>("inicio");

  const handleChangeCurrentLink = (value: currentLink) => {
    setCurrentLink(value);
  }

  const handleRedirect = (url: string, value: currentLink) => {
    handleChangeCurrentLink(value);
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
        <AuxNav margin={"1700px"} isHome={isHome} />
        <Container>
          <Nav ColorBtn={"#fff"}>
            <Check />
            <Logo onClick={() => handleRedirect("/home", "inicio")}>
              <NameUser msg={text.navbarTitle} textBig={textBig} />
            </Logo>
            <ContainerLinks
              handleRedirect={handleRedirect}
              nameUser={nameUser}
              emailState={emailState}
              currentLink={currentLink}
              handleChangeCurrentLink={handleChangeCurrentLink}
            />
          </Nav>
          {isHome && <Header />}
        </Container>
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Index;
