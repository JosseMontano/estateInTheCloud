import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/visitUser/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Comments from "../components/visitUser/comments";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import Publication from "../components/profile/publication";
import { getRealEstateByEmail } from "../services/realEstate";
import useLoadData from "../hooks/useLoadDataParams";
import { RealEstate } from "../interface/realEstate";

const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

interface Params {
  showNavbar: JSX.Element;
}

const VisitUser = ({ showNavbar }: Params) => {
  const { id: idParam, email } = useParams();
  const idParamNumber = Number(idParam);
  const {} = useVerifyUserLogin();

  const { data, loading } = useLoadData(getRealEstateByEmail, idParamNumber);
  //get cellphone of user
  let dataObj = {} as RealEstate;
  dataObj = Object.assign({}, data[0]);
  const { cellphonenumber } = dataObj;

  return (
    <>
      {showNavbar}
      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        <Header
          email={email}
          idParam={idParamNumber}
          cellphonenumber={cellphonenumber}
        />
        {idParamNumber != 0 && (
          <Publication showbtn={false} data={data} loading={loading} />
        )}
        <Comments idParam={idParamNumber} />
      </Container>
    </>
  );
};

export default VisitUser;
