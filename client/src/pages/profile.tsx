import styled from "styled-components";
import Header from "../components/profile/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Publication from "../components/profile/publication";
import { Suspense, useContext, useEffect } from "react";
import { NameUserContext } from "@/context/nameUserContext";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import { UseModal } from "../hooks/useModal";
import { Modal } from "../components/global/modal";
import ContentModal from "../components/profile/createRealEstate";
import Navbar from "@/components/navbar";
import { useProfile } from "@/context/profile/profileContext";
const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  min-height: 100vh;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const {} = useVerifyUserLogin();
  const { idUser, email } = useContext(NameUserContext);
  const { handleGetData, createRealEstate } = useProfile();

  const { isShown, toggle } = UseModal();

  useEffect(() => {
    if (idUser != 0) {
      handleGetData();
    }
  }, [idUser]);

  const showPublication = () => {
    return <Publication showbtn={true} />;
  };

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Navbar />

      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        {email && <Header email={email} idUser={idUser} toggle={toggle} />}
        {idUser != 0 && showPublication()}
      </Container>

      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<ContentModal createRealEstate={createRealEstate} />}
      />
    </Suspense>
  );
};

export default Profile;
