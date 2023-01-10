import { useState } from "react";
import styled from "styled-components";
import StartIcon from "../../../icons/start";

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

  function showStar(v: number, i: number) {
    return (
      <label
        key={i}
        onMouseEnter={() => handleHover(v)}
        onMouseLeave={() => handleHover(0)}
        onClick={() => handleClick(v)}
      >
        <StartIcon />
      </label>
    );
  }

  return (
    <Container puntuation={puntuation} hover={hover}>
      <div className="star-widget">
        {[1, 2, 3, 4, 5].map((v, i) => showStar(v, i))}
      </div>
    </Container>
  );
};

export default Starts;
