import { RefObject, useRef } from "react";
import styled from "styled-components";
const Container = styled.div`
  .slider-wrapper {
    margin: 1rem;
    position: relative;
    /*     overflow: hidden; */
  }

  .slides-container {
    display: flex;
    /*  overflow: scroll;  */
    overflow: hidden;
    scroll-behavior: smooth;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .slide-arrow {
    position: absolute;
    display: flex;
    top: 10px;
    bottom: 0px;
    margin: auto;
    height: 4rem;
    background-color: white;
    border: none;
    width: 2rem;
    font-size: 3rem;
    padding: 0;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 100ms;
    z-index: 999;
  }

  .slide-arrow:hover,
  .slide-arrow:focus {
    opacity: 1;
  }

  #slide-arrow-prev {
    left: 0px;
    border-radius: 2rem;
    top: 45px;
  }

  #slide-arrow-next {
    right: 20px;
    border-radius: 2rem;
    top: 45px;
  }

  .slide {
    width: 100%;
    height: 100%;
    flex: 1 0 100%;
  }
`;
interface Params {
  slide: RefObject<HTMLDivElement>;
  children: JSX.Element[];
}
function Carousel({ slide, children }: Params) {
  const slidesContainer = useRef<HTMLDivElement>(null);
  const handlePrev = () => {
    if (slide.current) {
      const slideWidth = slide.current.clientWidth;
      if (slidesContainer.current) {
        slidesContainer.current.scrollLeft -= slideWidth;
      }
    }
  };

  const handleNext = () => {
    if (slide.current) {
      const slideWidth = slide.current.clientWidth;
      if (slidesContainer.current) {
        slidesContainer.current.scrollLeft += slideWidth;
      }
    }
  };

  return (
    <Container>
      <div className="slider-wrapper">
        <button
          onClick={handlePrev}
          className="slide-arrow"
          id="slide-arrow-prev"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="slide-arrow"
          id="slide-arrow-next"
        >
          &#8250;
        </button>
        <div
          className="slides-container"
          ref={slidesContainer}
          id="slides-container"
        >
          {children}
        </div>
      </div>
    </Container>
  );
}

export default Carousel;
