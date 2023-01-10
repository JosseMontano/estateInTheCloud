import styled from "styled-components";
import Header from "./components/header";
import { marginGlobal, ColorText } from "@/styles/globals";
import Publication from "@/components/dynamic/profileVisitUser/publication";
import { Suspense, useEffect } from "react";
import { useNameUser } from "@/context/nameUserContext";
import { useVerifyUserLogin } from "@/hooks/useVerifyUserLogin";
import { UseModal } from "@/hooks/useModal";
import { Modal } from "@/components/global/modal";
import ContentModal from "./components/createRealEstate/createRealEstate";
import Navbar from "@/components/navbar";
import { RealEstate } from "@/interfaces/realEstate";
import { useProfile } from "@/context/profile/profileContext";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  min-height: 100vh;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const {} = useVerifyUserLogin();
  const { idUser, email } = useNameUser();

  const { data, loading, getRealEstate } = useProfile();

  const { isShown, toggle } = UseModal({});

  const createRealEstate = (newData: RealEstate) => {
    /* setData([...data, newData]); */
  };

  useEffect(() => {
    getRealEstate(idUser);
  }, [idUser]);

  const showPublication = () => {
    const realEstate = data.GET_REAL_ESTATE_BY_ID_USER;
    if (realEstate.length > 0) {
      return <Publication data={realEstate} loading={loading} showbtn={true} />;
    }
  };

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Navbar />

      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        {email && (
          <Header
            amountPublciation={data.GET_REAL_ESTATE_BY_ID_USER.length}
            idUser={idUser}
            toggle={toggle}
          />
        )}
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
