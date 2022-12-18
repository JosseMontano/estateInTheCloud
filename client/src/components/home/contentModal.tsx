import { RealEstate } from "@/interface/realEstate";
import { getRealEstateOfOnePublication as getRealEstate } from "@/services/realEstate";
import { H2, P, Container, ContainerContent } from "@/styles/modal/perfil";
import Load from "./modal/load";
import ImgCom from "./modal/img";
import useLoadData from "@/hooks/useFetch";
import { useRef } from "react";
import ContainerBtnModal from "./containerBtnModal";
import Carousel from "../dynamic/carousel";

export const ContentModal = (v: RealEstate) => {
  const { data, loading } = useLoadData(getRealEstate, v.idrealestate);
  const slide = useRef<HTMLDivElement>(null);

  function children() {
    return data.map((v, i) => (
      <div className="slide" key={i} ref={slide}>
        <ImgCom {...(v as RealEstate)} />
      </div>
    ));
  }

  function showCarousel() {
    return <Carousel children={children()} slide={slide} />;
  }

  return (
    <Container>
      {loading ? <Load /> : showCarousel()}
      <ContainerContent>
        <H2>{v.title}</H2>
        <P>{v.description}</P>
        <ContainerBtnModal v={v} />
      </ContainerContent>
    </Container>
  );
};
