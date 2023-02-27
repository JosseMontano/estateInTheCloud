import { params } from "@/global/components/navbar/auxNav";
import styled from "styled-components";


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

interface Params{
  url: string
}

const ImgCom = ({url}:Params) => {
  return (
    <>
      <Img src={url} alt="" />
    </>
  );
};

export default ImgCom;
