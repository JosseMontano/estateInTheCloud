import styled from "styled-components";
import Header from "./components/header";
import { marginGlobal, ColorText } from "@/global/styles/globals";
import Publication from "@/global/components/dynamic/profileVisitUser/publication";
import { Suspense, useEffect } from "react";
import { useNameUser } from "@/global/context/nameUserContext";
import { Modal, useModal } from "jz-modal";
import ContentModal from "./components/createRealEstate";
import { RealEstate } from "@/global/interfaces/realEstate";
import { useProfile } from "@/global/context/profileContext";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  min-height: 100vh;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const { idUser, email } = useNameUser();

  const { data, loading, getRealEstate } = useProfile();

  const { isShown, toggle } = useModal({});

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

  if (data != undefined) {
    return (
      <Suspense fallback={<p>Loading</p>}>
        <Container marginGlobal={marginGlobal} ColorText={ColorText}>
          {email && (
            <Header
              amountPublciation={data.GET_REAL_ESTATE_BY_ID_USER.length}
              idUser={idUser}
              toggle={toggle}
              isShown={isShown}
            />
          )}
          {idUser != 0 && !isShown && showPublication()}

          {isShown && <ContentModal createRealEstate={createRealEstate} /> }
        </Container>
      </Suspense>
    );
  }

  return <></>;
};

export default Profile;
