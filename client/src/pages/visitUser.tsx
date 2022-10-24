import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/visitUser/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Navbar from "../components/navbar";
import AuxNav from "../components/navbar/auxNav";
import { useContext, useEffect } from "react";
import { getRealEstateProfil } from "../services/realEstate";
import { NameUserContext } from "../context/nameUser";
import Comments from "../components/visitUser/comments";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const VisitUser = () => {
  const { email } = useParams();
  const { idUser } = useContext(NameUserContext);
  const { verifyFun } = useVerifyUserLogin();

  const handlegetRealEstate = async () => {
    const resp = await getRealEstateProfil(idUser);
    if (resp.message === "Not found") {
      return;
    }
  };

  useEffect(() => {
    verifyFun();
    if (idUser != 0) handlegetRealEstate();
  }, [idUser]);

  return (
    <>
      <Navbar />
      <AuxNav margin={"1700px"} />
      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        <Header email={email} />
        <Comments email={email} />
      </Container>
    </>
  );
};

export default VisitUser;
