import Card from "./card";
import { RealEstate } from "@/global/interfaces/realEstate";
import Title from "./title";
import styled from "styled-components";
import Carousel from "@/global/components/carousel";
import { useRef } from "react";
import DataEmpty from "@/global/components/dataEmpty";
import { useLanguage } from "@/global/context/languageContext";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column !important;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 15px 0px;
`;

interface Params {
  title: string;
  data: RealEstate[];
  visitUser: (idUser: number, email: string) => void;
  addFavorite: (realEstateId: number) => void;
}

const Index = ({ data, title, visitUser, addFavorite }: Params) => {
  const slide = useRef<HTMLDivElement>(null);
  const { text } = useLanguage();

  function content(v: RealEstate, i: number) {
    return (
      <ContainerCard key={i}>
        <div className="slide" ref={slide}>
          <Card v={v} visitUser={visitUser} addFavorite={addFavorite} />
        </div>
      </ContainerCard>
    );
  }

  function children() {
    return data.map((v, i) => content(v, i));
  }

  return (
    <>
      <Title title={title} />
      {data.length > 0 ? (
        <Carousel slide={slide} children={children()} />
      ) : (
        <DataEmpty msg={text.dataEmpty} />
      )}
    </>
  );
};

export default Index;
