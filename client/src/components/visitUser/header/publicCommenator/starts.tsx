import { useState } from "react";
import styled from "styled-components";
import StartIcon from "../../../../icons/start";

const Container = styled.div<{ puntuation: number; hover: number }>`
  .star-widget {
    display: flex;
    justify-content: center;
  }
  .star-widget label {
    font-size: 40px;
    color: #444;
    padding: 10px;
    transition: all 0.2 ease;
  }
  label:nth-child(-n + ${(props) => props.hover}) {
    color: #fd4;
    cursor: pointer;
  }
  label:nth-child(-n + ${(props) => props.puntuation}) {
    //when we give a click
    color: #fd4;
  }
`;

interface Params {
  getStart: (v: number) => void;
}

const Starts = ({ getStart }: Params) => {
  const [puntuation, setPuntuation] = useState(0);
  const [hover, setHover] = useState(0);

  const handleHover = (num: number) => {
    setHover(num);
  };

  const handleClick = (num: number) => {
    setPuntuation(num);
    getStart(num);
  };
  return (
    <Container puntuation={puntuation} hover={hover}>
      <div className="star-widget">
        <label
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(0)}
          onClick={() => handleClick(1)}
        >
          <StartIcon />
        </label>

        <label
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHover(0)}
          className="fas fa-star"
          onClick={() => handleClick(2)}
        >
          <StartIcon />
        </label>

        <label
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHover(0)}
          className="fas fa-star"
          onClick={() => handleClick(3)}
        >
          <StartIcon />
        </label>

        <label
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => handleHover(0)}
          className="fas fa-star"
          onClick={() => handleClick(4)}
        >
          <StartIcon />
        </label>

        <label
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={() => handleHover(0)}
          className="fas fa-star"
          onClick={() => handleClick(5)}
        >
          <StartIcon />
        </label>
      </div>
    </Container>
  );
};

export default Starts;
