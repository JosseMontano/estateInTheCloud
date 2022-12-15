import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Content from "../components/home";
import { useHome } from "../context/home/homeContext";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
import Skeleton from "../components/home/skeleton";
import { useNavigate } from "react-router-dom";
import { startTransition, Suspense } from "react";
import Navbar from "@/components/navbar";
const Container = styled.div`
  width: 100%;
`;



const Home = () => {
  const dataContext = useHome();
  const {} = useVerifyUserLogin();
  const navigate = useNavigate();
  const visitUser = (idUser: number, email: string) => {
    startTransition(()=>{
      navigate(`/visitUser/${idUser}/${email}`);
    })
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

  const showDataComplete = () => {
    return <Content dataComplete={data} visitUser={visitUser} />;
  };

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Container>
        <Navbar />
        {!dataContext.loading ? showDataComplete() : <Skeleton />}
      </Container>
    </Suspense>
  );
};

export default Home;
