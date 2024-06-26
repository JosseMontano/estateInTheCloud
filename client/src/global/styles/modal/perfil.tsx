import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 500px;
  gap:15px;
 
  .load {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media screen and (max-width: 572px) {
    grid-template-columns: 100%;
    justify-content: center;
    padding: 10%;
    width: 400px;
  }
  @media screen and (max-width: 460px) {
    width: 300px;
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  place-content: center;
  padding: 0px 10px;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

`;

export const Button = styled.button<{ ColorBtn: string }>`
  background-color: ${(props) => props.ColorBtn};
  color: #fff;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 0.2rem;
  font-size: 16px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const H2 = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color:#000;
  max-width: 85%;
`;
export const P = styled.p`
  margin-top: 10px;
  color:#000;
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #000 transparent;
  padding: 10px 0px;
`;
export const ContainerLoader = styled.div`
  height: 100%;
  display: grid;
  place-content: center;
`;
export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
