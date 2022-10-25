import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Loader from "../components/global/loading";
import Content from "../components/home";
import { useHome } from "../context/home/homeContext";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const {
    homeData,
    handleGetRealEstate,
    homeDataMostRecent,
    handleGetRealEstateMostRecent,
  } = useHome();
  const { verifyFun } = useVerifyUserLogin();

  useEffect(() => {
    verifyFun();
    handleGetRealEstateMostRecent();
    handleGetRealEstate();
  }, []);

  let data = [
    {
      title: "Mas recientes",
      data: homeDataMostRecent,
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
        {data.length > 0 ? <Content dataComplete={data} /> : <Loader />}
      </Container>
      ;
    </>
  );
};

export default Home;
