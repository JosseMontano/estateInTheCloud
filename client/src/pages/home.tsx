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
import { useHome } from "../context/home/homeContext";
const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const { homeData, handleGetRealEstate } = useHome();

  let navigate = useNavigate();

  const handleVerifyUser = async () => {
    const logged = await verifyLogged();
    if (!logged) navigate("/");
  };

  useEffect(() => {
    handleVerifyUser();
    handleGetRealEstate();
  }, []);

  let dataComplete = [
    {
      title: "Mas recientes",
      data: homeData,
    },
    {
      title: "Todos",
      data: homeData,
    },
    {
      title: "Recomendado",
      data: homeData,
    },
    {
      title: "Solo para ti",
      data: homeData,
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
