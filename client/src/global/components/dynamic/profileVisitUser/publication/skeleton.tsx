import styled from "styled-components";
import { MixinsAfterBlue } from "@/global/styles/skeleton";
const SkeletonStyled = styled.div`
  justify-self: center;
`;
const Img = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 15px;
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
  ${MixinsAfterBlue}
`;

const Skeleton = () => {
  return (
    <SkeletonStyled>
      <Img></Img>
    </SkeletonStyled>
  );
};

export default Skeleton;
