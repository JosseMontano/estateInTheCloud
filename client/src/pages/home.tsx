import { useContext, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { RealEstate } from "../interface/realEstate";
import { verifyLogged } from "../utilities/verifyLogged";
import { useNavigate } from "react-router";
import Loader from "../components/loader";
import Content from "../components/home";
import { getRealEstateAll } from "../services/realEstate";
const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const [data, setData] = useState<RealEstate[]>([]);
  let navigate = useNavigate();

  const handleVerifyUser = async () => {
    const logged = await verifyLogged();
    if (!logged) navigate("/");
  };

  const handleGetRealEstate = async () => {
    const resp = await getRealEstateAll();
    setData(resp);
  };

  useEffect(() => {
    handleVerifyUser();
    handleGetRealEstate();
  }, []);

  let dataComplete = [
    {
      title: "Mas recientes",
      data: data,
    },
    {
      title: "Todos",
      data: data,
    },
    {
      title: "Recomendado",
      data: data,
    },
    {
      title: "Solo para ti",
      data: data,
    },
  ];

  return (
    <>
       <Container>
       {dataComplete.length > 0 ? (
         <>
           <Content dataComplete={dataComplete} />
         </>
       ) : (
         <Loader />
       )}
     </Container>
      ;
    </>
  );
};

export default Home;
