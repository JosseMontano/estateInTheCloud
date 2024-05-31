import styled from "styled-components";


const Container = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  width: 30px;
  height: 30px;
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Cont = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  top:0px;
  width: 25px;
  height: 25px;
  border: 8px solid #000;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
const Loader = () => {
  return (
      <Container className="lds-ring">
        <Cont></Cont>
        <Cont></Cont>
        <Cont></Cont>
        <Cont></Cont>
      </Container>

  );
};

export default Loader;
