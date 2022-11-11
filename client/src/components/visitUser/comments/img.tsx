
import styled from "styled-components";
const Container = styled.div`
  justify-self: center;
  align-self: center;
`;
const ImgSty = styled.img`
  border-radius: 100%;
  height: 170px;
  width: 170px;
  object-fit: cover;
`;
interface params {
  url: string;
}
const Img = ({url}: params) => {

  return (
    <Container>
      <ImgSty src={url} alt="" />
    </Container>
  );
};

export default Img;
