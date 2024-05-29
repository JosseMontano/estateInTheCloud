import styled from "styled-components";
import Content from "./components/";
import { useHome } from "./context/homeContext";
import Skeleton from "./components/skeleton";
import { useNavigate } from "react-router-dom";
import { startTransition, Suspense, useState } from "react";
import { useLanguage } from "@/global/context/languageContext";
import { dataTypeEnum } from "./interfaces/dataTypeEnum";
import { dataCompleteType } from "./interfaces/dataCompleteType";
import { BtnsDataType } from "./interfaces/btnsDataType";
import Header from "./components/header";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const { text } = useLanguage();
  const dataContext = useHome();
  const navigate = useNavigate();
  const visitUser = (idUser: number, email: string) => {
    startTransition(() => {
      navigate(`/visitUser/${idUser}/${email}`);
    });
  };

  let data: dataCompleteType[] = [
    {
      title: text.homeMoreRecent,
      data: dataContext.homeDataMostRecent,
      dataType: dataTypeEnum.homeMoreRecent,
    },
    {
      title: text.homeAll,
      data: dataContext.homeData,
      dataType: dataTypeEnum.homeAll,
    },
    {
      title: text.homeRecommendedOwner,
      data: dataContext.DataRecommendedByUser,
      dataType: dataTypeEnum.homeRecommendedOwner,
    },
    {
      title: text.homeForYou,
      data: dataContext.homeDataJustForYou,
      dataType: dataTypeEnum.homeForYou,
    },
  ];

  const showDataComplete = () => {
    return (
      <Content
        dataComplete={data}
        visitUser={visitUser}
        dataTypeState={dataContext.dataType}
        btnsDataType={dataContext.btnsDataType}
        handleDataTypeState={dataContext.handleDataTypeState}
      />
    );
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
