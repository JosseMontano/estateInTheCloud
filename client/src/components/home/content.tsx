import Card from "./card";
import { RealEstate } from "interface/realEstate";
import Title from "./title";
import styled from "styled-components";
import Carousel from "../dynamic/carousel";
import { useRef } from "react";

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
      <Carousel slide={slide} children={children()} />
    </>
  );
};

export default Index;
