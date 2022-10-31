import { useEffect, useState } from "react";
import styled from "styled-components";
import StartIcon from "../../../icons/start";

const Container = styled.div`
  display: flex;
  .star-widget {
    display: flex;
    justify-content: center;
  }
  .star-widget label {
    font-size: 40px;
    color: #fd4;
    padding: 10px;
    transition: all 0.2 ease;
  }
`;

interface Params {}

const ShowStarts = ({}: Params) => {

  return (
    <Container>
      <div className="star-widget">
        <label>
          <StartIcon />
        </label>
      </div>
      <div className="star-widget">
        <label>
          <StartIcon />
        </label>
      </div>
      <div className="star-widget">
        <label>
          <StartIcon />
        </label>
      </div>
    </Container>
  );
};

export default ShowStarts;
