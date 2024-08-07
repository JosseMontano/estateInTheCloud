import styled from "styled-components";
import Header from "./components/header";
import { marginGlobal, ColorText } from "@/global/styles/globals";
import Publication from "@/global/components/dynamic/profileVisitUser/publication";
import { Suspense, useEffect, useState } from "react";
import { useNameUser } from "@/global/context/nameUserContext";
import { useModal } from "jz-modal";
import ContentModal from "./components/createRealEstate";
import { RealEstate } from "@/global/interfaces/realEstate";
import { useProfile } from "@/global/context/profileContext";
import ShowFavorites from "./components/showFavorites";
import useFetch from "@/global/hooks/useFetch";
import { RealEstateFavType } from "./interfaces/realEstateFav";
import { deleteFav, getREFavs } from "./services/favorites";
import { Dashboard } from "./components/dashboard";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  min-height: 100vh;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const { idUser, email } = useNameUser();

  const { data, loading, getRealEstate } = useProfile();

  const { isShown, toggle } = useModal({});

  const [showDashboad, setShowdashboard] = useState(false);

  const handleDashboard = () => {
    setShowdashboard(!showDashboad);
  };

  const createRealEstate = (newData: RealEstate) => {
    /* setData([...data, newData]); */
    getRealEstate(idUser);
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

  //showFavorites
  const [showFav, setShowFav] = useState(false);

  const handleShowFav = () => {
    setShowFav(!showFav);
  };

  const { data: favorites, handleGetData } = useFetch<RealEstateFavType>(
    getREFavs,
    idUser
  );

  //deleteFavorite

  const handleDeleteFavorite = async (id: number) => {
    await deleteFav(id);
    await handleGetData();
  };

  if (data != undefined && data.GET_REAL_ESTATE_BY_ID_USER != undefined) {
    return (
      <Suspense fallback={<p>Loading</p>}>
        <Container marginGlobal={marginGlobal} ColorText={ColorText}>
          {email && (
            <Header
              amountPublciation={data.GET_REAL_ESTATE_BY_ID_USER.length}
              idUser={idUser}
              toggle={toggle}
              isShown={isShown}
              handleShowFav={handleShowFav}
              showFav={showFav}
              handleDashboard={handleDashboard}
              showDashboad={showDashboad}
            />
          )}
          {idUser != 0 &&
            !isShown &&
            !showFav &&
            !showDashboad &&
            showPublication()}

          {showFav && (
            <ShowFavorites
              handleDeleteFavorite={handleDeleteFavorite}
              data={favorites}
            />
          )}

          {isShown && <ContentModal createRealEstate={createRealEstate} />}

          {showDashboad && <Dashboard />}
        </Container>
      </Suspense>
    );
  }

  return <></>;
};

export default Profile;
