import styled from "styled-components";
import { RealEstate } from "@/interfaces/realEstate";
const Img = styled.img`
  height: 300px;
  width: 200px;
  object-fit: cover;
  margin-top: 15px;
  @media screen and (max-width: 572px) {
    width: 100%;
  }
  @media screen and (max-width: 470px) {
    height: 240px;
  }
`;

const ImgCom = (v: RealEstate) => {
  return (
    <>
      <Img src={v.url} alt="" />
    </>
  );
};

export default ImgCom;
