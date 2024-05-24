import styled from "styled-components";
import { RealEstate } from "@/global/interfaces/realEstate";

interface Params {
  url:string;
}

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-top: 15px;
  @media screen and (max-width: 730px) {
    height: 300px;
  }
  @media screen and (max-width: 572px) {
    width: 100%;
  }
  @media screen and (max-width: 470px) {
    height: 240px;
  }
`;

function ImgCom (v: Params) {
  return <Img src={v.url} alt="" />;
};

export default ImgCom;
