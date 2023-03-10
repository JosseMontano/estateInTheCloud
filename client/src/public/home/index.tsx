import styled from "styled-components";
import Content from "./components/";
import { useHome } from "./context/homeContext";
import Skeleton from "./components/skeleton";
import { useNavigate } from "react-router-dom";
import { startTransition, Suspense } from "react";
import { useLanguage } from "@/global/context/languageContext";
import { useNameUser } from "@/global/context/nameUserContext";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const { text } = useLanguage();
  const { idUser } = useNameUser();
  const dataContext = useHome();
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

  window.scroll(0, 0);

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Container>
        {!dataContext.loading ? showDataComplete() : <Skeleton />}
      </Container>
    </Suspense>
  );
};

export default Home;
