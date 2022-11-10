import styled from 'styled-components';

const Img = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  margin-top: 15px;
  @media screen and (max-width: 1450px) {
    height: 200px;
  }
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

const ImgCom = (v:any) => {
  return (
    <Img src={v.url} alt="" />
  )
}

export default ImgCom