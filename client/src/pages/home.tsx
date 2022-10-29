import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Loader from "../components/global/loading";
import Content from "../components/home";
import { useHome } from "../context/home/homeContext";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
import Skeleton from "../components/home/skeleton";

const Container = styled.div`
  width: 100%;
`;

interface Params {
  navbar: JSX.Element;
}

const Home = ({ navbar }: Params) => {
  const { homeData, homeDataMostRecent, loading } = useHome();
  const {} = useVerifyUserLogin();

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
    <Container>
      {navbar}
      {!loading ? <Content dataComplete={data} /> : <Skeleton />}
    </Container>
  );
};

export default Home;
