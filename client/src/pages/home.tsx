import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Rick } from "../models/rick";
import { verifyLogged } from "../utilities/verifyLogged";
import { useNavigate } from "react-router";
import { getRicky } from "../services/estate";
import Loader from "../components/loader";
import Content from "../components/home";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const [data, setData] = useState<Rick[]>([]);
  let navigate = useNavigate();

  const handleVerifyUser = async () => {
    const logged = await verifyLogged();
    if (!logged) navigate("/");
  };

  const handleGetData = async () => {
    const getData = await getRicky();
    setData(getData);
  };

  useEffect(() => {
    handleVerifyUser();
    handleGetData();
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
    <Container>
      {dataComplete.length > 0 ? (
        <>
          <Content dataComplete={dataComplete} />
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Home;
