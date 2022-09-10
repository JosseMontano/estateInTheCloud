import styled from "styled-components";
import Photo from "../../../assets/profile/photoProfile.jpg";

const Container = styled.div`
  justify-self: center;
`;
const Img = styled.img`
  border-radius: 100%;
  height: 180px;
  object-fit: cover;
`;
const ContentImg = () => {
  return (
    <Container>
      <Img src={Photo} alt="" />
    </Container>
  );
};

export default ContentImg;
