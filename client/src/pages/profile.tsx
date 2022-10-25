import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/profile/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Navbar from "../components/navbar";
import AuxNav from "../components/navbar/auxNav";
import Publication from "../components/profile/publication";
import { useContext, useEffect, useState } from "react";
import { getRealEstateProfil } from "../services/realEstate";
import { NameUserContext } from "../context/nameUser";
import { RealEstate } from "../interface/realEstate";
import Loader from "../components/global/loading";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import { UseModal } from "../hooks/useModal";
import { Modal } from "../components/global/modal";
import ContentModal from "../components/profile/createRealEstate";
const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const { email } = useParams();
  const [data, setData] = useState<RealEstate[]>([]);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(true);
  const { idUser } = useContext(NameUserContext);
  const { verifyFun } = useVerifyUserLogin();
  const { isShown, toggle } = UseModal();

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
    verifyFun();
    if (idUser != 0) handlegetRealEstate();
  }, [idUser]);

  return (
    <>
      <Navbar />
      <AuxNav margin={"1700px"} />
      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        <Header email={email} toggle={toggle} />
        {loading ? <Loader /> : <Publication data={data} empty={empty} />}
      </Container>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<ContentModal getRealEstate={handlegetRealEstate} />}
      />
    </>
  );
};

export default Profile;
