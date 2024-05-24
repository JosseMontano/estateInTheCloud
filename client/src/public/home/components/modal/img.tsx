import { borderImg } from "@/global/styles/globals";
import styled from "styled-components";


const Img = styled.img`
  height:100%;
  width: 100%;
  object-fit: cover;
  margin-top: 15px;
  border-radius: ${borderImg};
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
      <Img src={url} alt="photo" />
    </>
  );
};

export default ImgCom;
