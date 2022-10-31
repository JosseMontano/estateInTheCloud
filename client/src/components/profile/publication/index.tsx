import styled from "styled-components";
import ContentImg from "./contentImg";
import { RealEstate } from "../../../interface/realEstate";
import Skeleton from "./skeleton";
import { useEffect } from "react";

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-top: 15px;
`;
const ContainerFather = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const TextEmpty = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 15px;
  text-transform: uppercase;
`;
interface Params {
  data: RealEstate[];
  loading: boolean;
  showbtn: boolean;
}

const Index = ({ data, loading, showbtn }: Params) => {
  function showTitle() {
    if (loading) {
      return <TextEmpty>Cargando publicaciones</TextEmpty>;
    }
    return <Title>publicaciones</Title>;
  }

  function showData() {
    if (loading) return [1, 2, 3, 4, 5, 6].map((_, i) => <Skeleton key={i} />);
    return data.map((v, i) => <ContentImg key={i} v={v} showbtn={showbtn} />);
  }

  return (
    <>
      {showTitle()}
      <ContainerFather>{showData()}</ContainerFather>
    </>
  );
};

export default Index;
