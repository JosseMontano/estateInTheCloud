import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/visitUser/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Comments from "../components/visitUser/comments";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import Publication from "@/components/dynamic/profileVisitUser/publication";
import { getRealEstateProfil } from "../services/realEstate";
import useLoadData from "../hooks/useFetch";
import { RealEstate } from "../interfaces/realEstate";
import { Suspense } from "react";
import Navbar from "@/components/navbar";

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
  const { data, loading } = useLoadData<RealEstate>(
    getRealEstateProfil,
    idUserNumber
  );
  //get cellphone of user
  let dataObj = {} as RealEstate;
  dataObj = Object.assign({}, data[0]);
  const { cellphonenumber } = dataObj;

  const showPublication = () => {
    return (
      <Publication
        showbtn={false}
        data={data}
        loading={loading}
        idRealEstate={realEstateNumber}
      />
    );
  };

  return (
    <Suspense fallback={null}>
      <Navbar />
      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        <Header
          email={email}
          iUserNumber={idUserNumber}
          cellphonenumber={cellphonenumber}
        />
        {idUserNumber != 0 && showPublication()}
        <Comments idParam={idUserNumber} />
      </Container>
    </Suspense>
  );
};

export default VisitUser;
