import styled from "styled-components";
import Header from "../components/profile/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Publication from "../components/profile/publication";
import { Suspense, useContext, useEffect } from "react";
import { getRealEstateProfil as services } from "../services/realEstate";
import { NameUserContext } from "@/context/nameUser/nameUserContext";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import { UseModal } from "../hooks/useModal";
import { Modal } from "../components/global/modal";
import ContentModal from "../components/profile/createRealEstate";
import useFetch from "../hooks/useFetch";
import Navbar from "@/components/navbar";
import { RealEstate } from "@/interface/realEstate";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  min-height: 100vh;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const {} = useVerifyUserLogin();
  const { idUser, email } = useContext(NameUserContext);
  const { data, loading, handleGetData, setData } = useFetch<RealEstate>(
    services,
    idUser
  );
  const { isShown, toggle } = UseModal();

  const createRealEstate = (newData: RealEstate) => {
    setData([...data, newData]);
  };

  const deleteRealEstate = (id: number) => {
    setData(data.filter((v) => v.idrealestate != id));
  };

  const updateStateRE = (available: boolean, id: number) => {
    console.log(available)
    setData(
      data.map((v) =>
        v.idrealestate === id
          ? {
              ...v,
              state: available,
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
