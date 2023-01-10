import Card from "./card";
import { RealEstate } from "@/global/interfaces/realEstate";
import Title from "./title";
import styled from "styled-components";
import Carousel from "@/components/dynamic/carousel";
import { useRef } from "react";
import DataEmpty from "@/global/components/dataEmpty";
import { useLanguage } from "@/context/languageContext";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column !important;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

interface Params {
  title: string;
  data: RealEstate[];
  visitUser: (idUser: number, email: string) => void;
}

const Index = ({ data, title, visitUser }: Params) => {
  const slide = useRef<HTMLDivElement>(null);
  const { text } = useLanguage();
  
  function content(v: RealEstate, i: number) {
    return (
      <ContainerCard key={i}>
        <div className="slide" ref={slide}>
          <Card v={v} visitUser={visitUser} />
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
