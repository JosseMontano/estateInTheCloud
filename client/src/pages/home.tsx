import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Content from "../components/home";
import { useHome } from "../context/home/homeContext";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
import Skeleton from "../components/home/skeleton";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "@/context/navbarContext";

const Container = styled.div`
  width: 100%;
`;

interface Params {}

const Home = ({}: Params) => {
  const { showNavbar } = useNavbar();
  const dataContext = useHome();
  const {} = useVerifyUserLogin();
  const navigate = useNavigate();
  const visitUser = (idUser: number, email: string) => {
    navigate(`/visitUser/${idUser}/${email}`);
  };

  let data = [
    {
      title: "Mas recientes",
      data: dataContext.homeDataMostRecent,
    },
    {
      title: "Todos",
      data: dataContext.homeData,
    },
    {
      title: "Propietarios Recomendados",
      data: dataContext.DataRecommendedByUser,
    },
    {
      title: "Solo para ti",
      data: dataContext.homeData,
    },
  ];

  return (
    <Container>
      {showNavbar()}
      {!dataContext.loading ? (
        <Content dataComplete={data} visitUser={visitUser} />
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default Home;
