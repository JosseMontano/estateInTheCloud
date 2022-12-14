import styled from "styled-components";
import Content from "../components/home";
import { useHome } from "../context/home/homeContext";
import useVerifyUserLogin from "../hooks/useVerifyUserLogin";
import Skeleton from "../components/home/skeleton";
import { useNavigate } from "react-router-dom";
import { startTransition, Suspense } from "react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/context/languageContext";
const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const { text } = useLanguage();
  const dataContext = useHome();
  const {} = useVerifyUserLogin();
  const navigate = useNavigate();
  const visitUser = (idUser: number, email: string) => {
    startTransition(() => {
      navigate(`/visitUser/${idUser}/${email}`);
    });
  };

  let data = [
    {
      title: text.homeMoreRecent,
      data: dataContext.homeDataMostRecent,
    },
    {
      title: text.homeAll,
      data: dataContext.homeData,
    },
    {
      title: text.homeRecommendedOwner,
      data: dataContext.DataRecommendedByUser,
    },
    {
      title: text.homeForYou,
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
