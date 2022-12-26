import styled from "styled-components";

const SkeletonStyled = styled.div`
  justify-self: center;
`;
const Img = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 15px;
 // background-color: rgb(190, 190, 190);
 background-color: rgb(40, 75, 89);
  @media screen and (max-width: 1450px) {
    height: 200px;
  }
  @media screen and (max-width: 730px) {
    height: 300px;
  }
  @media screen and (max-width: 470px) {
    height: 240px;
  }

  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        to left,
        transparent,
        /*  rgb(216, 216, 216), */
        rgb(50, 85, 99),
        transparent
      );
    animation: loading 1s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const Skeleton = () => {
  return (
    <SkeletonStyled>
      <Img></Img>
    </SkeletonStyled>
  );
};

export default Skeleton;
