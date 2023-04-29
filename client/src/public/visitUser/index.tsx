import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/headers";
import { marginGlobal, ColorText } from "../../global/styles/globals";
import Comments from "./components/comments";
import Publication from "@/global/components/dynamic/profileVisitUser/publication";
import { RealEstate } from "@/global/interfaces/realEstate";
import { Suspense, useEffect } from "react";
import { useProfile } from "@/global/context/profileContext";
import {Token} from "@/global/utilities/getTokenCookie"
const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const VisitUser = () => {
  const { id: idUser, email, realEstate } = useParams();

  let navigate = useNavigate();

  if (!Token) {
    navigate("/");
    location.reload();
  }


  const idUserNumber = Number(idUser);
  const realEstateNumber = parseFloat(realEstate!);
  const { data, loading, getRealEstate } = useProfile();
 
  //get cellphone of user
  let dataObj = {} as RealEstate;
  if (data) {
    dataObj = Object.assign({}, data.GET_REAL_ESTATE_BY_ID_USER[0]);
  }
  const { cellphone_number } = dataObj;

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
      {data && (
        <Container marginGlobal={marginGlobal} ColorText={ColorText}>
          <Header
            amountPublication={data.GET_REAL_ESTATE_BY_ID_USER.length}
            email={email}
            iUserNumber={idUserNumber}
            cellphonenumber={cellphone_number}
          />
          {idUserNumber != 0 && showPublication()}
          <Comments idParam={idUserNumber} />
        </Container>
      )}
    </Suspense>
  );
};

export default VisitUser;
