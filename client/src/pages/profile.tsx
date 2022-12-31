import styled from "styled-components";
import Header from "../components/profile/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Publication from "@/components/dynamic/profileVisitUser/publication";
import { Suspense, useEffect } from "react";
import { getRealEstateProfil as services } from "../services/realEstate";
import { useNameUser } from "@/context/nameUserContext";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import { UseModal } from "../hooks/useModal";
import { Modal } from "../components/global/modal";
import ContentModal from "../components/profile/createRealEstate";
import useFetch from "../hooks/useFetch";
import Navbar from "@/components/navbar";
import { RealEstate } from "@/interfaces/realEstate";


const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  min-height: 100vh;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const {} = useVerifyUserLogin();
  const { idUser, email } = useNameUser();
  const { data, loading, handleGetData, setData } = useFetch<RealEstate>(
    services,
    idUser
  );
  const { isShown, toggle } = UseModal({});

  const createRealEstate = (newData: RealEstate) => {
    setData([...data, newData]);
  };

  const deleteRealEstate = (id: number) => {
    setData(data.filter((v) => v.idrealestate != id));
  };

  const updateStateRE = (state: boolean, id: number) => {
    setData(
      data.map((v) =>
        v.idrealestate === id
          ? {
              ...v,
              state: state,
            }
          : v
      )
    );
  };


  useEffect(() => {
    if (idUser != 0) {
      handleGetData();
    }
  }, [idUser]);

  const showPublication = () => {
    return (
      <Publication
        deleteRealEstate={deleteRealEstate}
        data={data}
        loading={loading}
        showbtn={true}
        updateStateRE={updateStateRE}
      />
    );
  };

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Navbar />

      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        {email && (
          <Header
            amountPublciation={data.length}
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
