import { RefObject, useRef, useState } from "react";
import styled from "styled-components";
import { ColorBtn } from "../styles/globals";

const Container = styled.div`
  position: relative;
  .slide {
    width: 100%;
    height: 100%;
    flex: 1 0 100%;
  }
  #prev {
    left: 0px;
    border-radius: 2rem;
    top: 45px;
  }
  #next {
    right: 20px;
    border-radius: 2rem;
    top: 45px;
  }
`;
const ContainerSlide = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  scrollbar-width: thin;
  scrollbar-color: #000 transparent;
  height: 100%;
`;

const ContainerBtn = styled.div`
  position: absolute;
  bottom: 0%;
`;

const Btn = styled.button`
  background-color: ${ColorBtn};
  color: #fff;
  border: none;

  height: 30px;
  padding: 5px;
  margin: 0px 5px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 100ms;
  z-index: 999;
  span{
    font-size: 18px;
  }
  &:hover,
  &:focus {
    opacity: 1;
  }
  
`;

interface Params {
  slide: RefObject<HTMLDivElement>;
  children: JSX.Element[];
}

function Carousel({ slide, children }: Params) {
  const slidesContainer = useRef<HTMLDivElement>(null);
  const metSlide = (operation: string) => {
    const slideWidth = slide.current?.clientWidth;
    if (operation == "-") {
      slidesContainer.current!.scrollLeft -= slideWidth!;
      return;
    }
    slidesContainer.current!.scrollLeft += slideWidth!;
  };

  const handlePrev = () => metSlide("-");
  const handleNext = () => metSlide("+");

  const JSXBtn = [
    {
      click: handlePrev,
      id: "prev",
      txt: "<",
    },
    {
      click: handleNext,
      id: "next",
      txt: ">",
    },
  ];

  return (
    <Container>
      <ContainerBtn>
        {JSXBtn.map((v) => (
          <Btn onClick={v.click} id={v.id} key={v.id}>
            <span>{v.txt}</span>
          </Btn>
        ))}
      </ContainerBtn>

      <ContainerSlide ref={slidesContainer}>{children}</ContainerSlide>
    </Container>
  );
}

export default Carousel;
