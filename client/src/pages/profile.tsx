import styled from "styled-components";
import Header from "../components/profile/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Publication from "../components/profile/publication";
import { useContext, useEffect } from "react";
import { getRealEstateProfil } from "../services/realEstate";
import { NameUserContext } from "../context/nameUser";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import { UseModal } from "../hooks/useModal";
import { Modal } from "../components/global/modal";
import ContentModal from "../components/profile/createRealEstate";
import useLoadDataParams from "../hooks/useLoadDataParams";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

interface Params {
  showNavbar: JSX.Element;
}

const Profile = ({ showNavbar }: Params) => {
  const {} = useVerifyUserLogin();
  const { idUser, email } = useContext(NameUserContext);
  const { data, loading, handleGetData } = useLoadDataParams(
    getRealEstateProfil,
    idUser
  );
  const { isShown, toggle } = UseModal();
  useEffect(() => {
    if (idUser != 0) {
      handleGetData();
    }
  }, [idUser]);

  return (
    <>
      {showNavbar}

      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        {email && <Header email={email} idUser={idUser} toggle={toggle} />}
        {idUser != 0 && <Publication data={data} loading={loading} showbtn={true} />}
      </Container>

      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<ContentModal getRealEstate={handleGetData} />}
      />
    </>
  );
};

export default Profile;
