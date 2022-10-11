import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/visitUser/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Navbar from "../components/navbar";
import AuxNav from "../components/navbar/auxNav";
import { useContext, useEffect, useState } from "react";
import { verifyLogged } from "../utilities/verifyLogged";
import { getRealEstateProfil } from "../services/realEstate";
import { NameUserContext } from "../context/nameUser";
import { RealEstate } from "../interface/realEstate";
import Comments from "../components/visitUser/comments";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const VisitUser = () => {
  const { email } = useParams();
  const [data, setData] = useState<RealEstate[]>([]);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(true);
  const { idUser } = useContext(NameUserContext);
  let navigate = useNavigate();
  const handleVerifyUser = async () => {
    const logged = await verifyLogged();
    if (!logged) navigate("/");
  };
  const handlegetRealEstate = async () => {
    const resp = await getRealEstateProfil(idUser);
    if (resp.message === "Not found") {
      setLoading(false);
      return;
    }
    setData(resp);
    setEmpty(false);
    setLoading(false);
  };
  useEffect(() => {
    handleVerifyUser();
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