import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/visitUser/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Comments from "../components/visitUser/comments";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import Publication from "@/components/dynamic/profileVisitUser/publication";
import { getRealEstateByEmail } from "../services/realEstate";
import useLoadData from "../hooks/useFetch";
import { RealEstate } from "../interface/realEstate";
import { Suspense } from "react";
import Navbar from "@/components/navbar";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const VisitUser = () => {
  const { id: idUser, email, realEstate } = useParams();
  const iUserNumber = Number(idUser);
  const {} = useVerifyUserLogin();
  const realEstateNumber = parseFloat(realEstate!);
  const { data, loading } = useLoadData<RealEstate>(
    getRealEstateByEmail,
    iUserNumber
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
          iUserNumber={iUserNumber}
          cellphonenumber={cellphonenumber}
        />
        {iUserNumber != 0 && showPublication()}
        <Comments idParam={iUserNumber} />
      </Container>
    </Suspense>
  );
};

export default VisitUser;
