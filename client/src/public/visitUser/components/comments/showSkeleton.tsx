import styled from "styled-components";
import { MixinsAfter } from "@/global/styles/skeleton";
const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin-top: 15px;
  @media screen and (max-width: 870px) {
    grid-template-columns: 30% 70%;
  }
  @media screen and (max-width: 732px) {
    grid-template-columns: 1fr;
  }
`;
const ContainerImg = styled.div`
  justify-self: center;
  align-self: center;
`;
const ImgSty = styled.div`
  background-color: rgb(190, 190, 190);
  border-radius: 100%;
  min-height: 170px;
  min-width: 170px;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  ${MixinsAfter}
`;
const ContainerContent = styled.div`
  align-self: center;
`;
const NameUser = styled.h3`
  max-width: 20%;
  background-color: rgb(190, 190, 190);
  margin-bottom: 5px;
  position: relative;
  overflow: hidden;
  ${MixinsAfter}
  @media screen and (max-width: 732px) {
    text-align: center;
    font-size: 26px;
  }
`;
const Desc = styled.p`
  max-width: 35%;
  height: 40px;
  background-color: rgb(190, 190, 190);
  position: relative;
  overflow: hidden;
  ${MixinsAfter}
`;
const Skeleton = () => {
  return (
    <Container>
      <ContainerImg>
        <ImgSty></ImgSty>
      </ContainerImg>
      <ContainerContent>
        <NameUser className="loading">&#160;</NameUser>
        <Desc className="loading">&#160;</Desc>
      </ContainerContent>
    </Container>
  );
};

export default Skeleton;
