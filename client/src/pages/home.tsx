import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Loader from "../components/loader";
import Content from "../components/home";
import { useHome } from "../context/home/homeContext";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const { homeData, handleGetRealEstate } = useHome();
  const { verifyFun } = useVerifyUserLogin();

  useEffect(() => {
    verifyFun();
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
