import { RefObject, useRef, useState } from "react";
import styled from "styled-components";
import { ColorBtn, ColorBtnSecond, ColorBtnThird } from "../styles/globals";

const Container = styled.div`
  margin: 1rem;
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
  scrollbar-width: thin;
  scrollbar-color: #000 transparent;
`;
const Btn = styled.button`
  position: absolute;
  bottom: 0px;
  margin: auto;
  height: 4rem;
  background-color: ${ColorBtn};
  color:#fff;
  border: none;
  width: 2rem;
  font-size: 2rem;
  padding: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 100ms;
  z-index: 999;
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
      {JSXBtn.map((v) => (
        <Btn onClick={v.click} id={v.id} key={v.id}>
          <span>{v.txt}</span>
        </Btn>
      ))}
      <ContainerSlide ref={slidesContainer}>{children}</ContainerSlide>
    </Container>
  );
}

export default Carousel;
