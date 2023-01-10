import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/headers";
import { marginGlobal, ColorText } from "../../styles/globals";
import Comments from "./components/comments";
import { useVerifyUserLogin } from "@/global/hooks/useVerifyUserLogin";
import Publication from "@/global/components/dynamic/profileVisitUser/publication";
import { RealEstate } from "@/global/interfaces/realEstate";
import { Suspense, useEffect } from "react";
import Navbar from "@/global/components/navbar";
import { useProfile } from "@/global/context/profileContext";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const VisitUser = () => {
  const { id: idUser, email, realEstate } = useParams();
  const idUserNumber = Number(idUser);
  const {} = useVerifyUserLogin();
  const realEstateNumber = parseFloat(realEstate!);
  const { data, loading, getRealEstate } = useProfile();

  //get cellphone of user
  let dataObj = {} as RealEstate;
  if (data) {
    dataObj = Object.assign({}, data.GET_REAL_ESTATE_BY_ID_USER[0]);
  }
  const { cellphonenumber } = dataObj;

  const showPublication = () => {
    if (data) {
      return (
        <Publication
          showbtn={false}
          data={data.GET_REAL_ESTATE_BY_ID_USER}
          loading={loading}
          idRealEstate={realEstateNumber}
        />
      );
    }
  };

  useEffect(() => {
    getRealEstate(idUserNumber);
  }, [idUserNumber]);

  return (
    <Suspense fallback={null}>
      <Navbar />
      {data && (
        <Container marginGlobal={marginGlobal} ColorText={ColorText}>
          <Header
            amountPublication={data.GET_REAL_ESTATE_BY_ID_USER.length}
            email={email}
            iUserNumber={idUserNumber}
            cellphonenumber={cellphonenumber}
          />
          {idUserNumber != 0 && showPublication()}
          <Comments idParam={idUserNumber} />
        </Container>
      )}
    </Suspense>
  );
};

export default VisitUser;
