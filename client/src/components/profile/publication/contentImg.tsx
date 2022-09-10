import styled from "styled-components";
import Casa from "../../../assets/casa.jpg";

const Containersoon = styled.div`
  justify-self: center;
`;
const Img = styled.img`
  height: 300px;
  object-fit: cover;
  margin-top: 15px;
  @media screen and (max-width: 1450px) {
    height: 200px;
  }
  @media screen and (max-width:730px) {
    height: 300px;
  }
  @media screen and (max-width:470px) {
    height: 240px;
  }
`;
const ContentImg = () => {
  return (
    <Containersoon>
      <Img src={Casa} alt="" />
    </Containersoon>
  );
};

export default ContentImg;
