import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/visitUser/header";
import { marginGlobal, ColorText } from "../styles/globals";
import { useContext, useEffect, useState } from "react";
import { NameUserContext } from "../context/nameUser";
import Comments from "../components/visitUser/comments";
import { useVerifyUserLogin } from "../hooks/useVerifyUserLogin";
import Publication from "../components/profile/publication";
import { RealEstate } from "../interface/realEstate";
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
  const { idUser } = useContext(NameUserContext);
  const {} = useVerifyUserLogin();

  /* const [data, setData] = useState<RealEstate[]>([]);
  const [loading, setLoading] = useState(true);

  const handlegetRealEstate = async () => {
    const resp = await getRealEstateByEmail(Number(idParam));
    if (resp.message === "Not found") {
      return;
    }
    setData(resp);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.scroll(0, 0);
    if (idUser != 0) handlegetRealEstate();
  }, [idUser]);
 */

  const { data, loading, handleGetData } = useLoadData(
    getRealEstateByEmail,
    idParamNumber
  );

  useEffect(() => {
    if (idParamNumber != 0) handleGetData();
  }, [idUser]);

  console.log(data);

  return (
    <>
      {showNavbar}
      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        <Header email={email} />
        {idParamNumber != 0 && <Publication data={data} loading={loading} />}
        <Comments email={email} />
      </Container>
    </>
  );
};

export default VisitUser;
