import Card from "./card";
import { RealEstate } from "@/global/interfaces/realEstate";
import Title from "./title";
import styled from "styled-components";
import Carousel from "@/global/components/carousel";
import { useRef } from "react";
import DataEmpty from "@/global/components/dataEmpty";
import { useLanguage } from "@/global/context/languageContext";
import { dataTypeEnum } from "../interfaces/dataTypeEnum";
import { BtnsDataType } from "../interfaces/btnsDataType";

const ContainerCard = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); // we’ve a max of 1fr and a min of 100px
  overflow: hidden;
  
`;

interface Params {
  title: string;
  data: RealEstate[];
  dataType: dataTypeEnum;
  dataTypeState: dataTypeEnum;
  visitUser: (idUser: number, email: string) => void;
  addFavorite: (realEstateId: number) => void;
}

const Index = ({
  data,
  dataTypeState,
  dataType,
  title,
  visitUser,
  addFavorite,
}: Params) => {
  const { text } = useLanguage();

  function content(v: RealEstate, i: number) {
    return (
      <Card key={i} v={v} visitUser={visitUser} addFavorite={addFavorite} />
    );
  }

  function children() {
    return <ContainerCard>{data.map((v, i) => content(v, i))}</ContainerCard>;
  }

  return (
    <>
      {dataTypeState === dataType && (
        <>
          <Title title={title} />
          {data.length > 0 ? children() : <DataEmpty msg={text.dataEmpty} />}
        </>
      )}
    </>
  );
};

export default Index;
