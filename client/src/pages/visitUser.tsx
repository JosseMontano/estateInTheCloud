import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/visitUser/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Comments from "../components/visitUser/comments";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import Publication from "../components/profile/publication";
import { getRealEstateByEmail } from "../services/realEstate";
import useLoadData from "../hooks/useLoadDataParams";
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

  const { data, loading, handleGetData } = useLoadData(
    getRealEstateByEmail,
    idParamNumber
  );

  return (
    <>
      {showNavbar}
      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        <Header email={email} />
        {idParamNumber != 0 && <Publication showbtn={false} data={data} loading={loading} />}
        <Comments email={email} />
      </Container>
    </>
  );
};

export default VisitUser;
