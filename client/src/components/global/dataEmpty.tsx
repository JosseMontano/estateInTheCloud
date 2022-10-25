import styled from "styled-components";
import NotFound from "../../assets/global/notFound.png";

const Container = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: calc(100vh-15px);
`;
const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;
const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  filter: invert(91%) sepia(8%) saturate(637%) hue-rotate(195deg)
    brightness(110%) contrast(96%);
  width: 150px;
`;

interface params {
  msg: string;
}

const DataEmpty = ({ msg }: params) => {
  return (
    <Container>
      <ContainerImg>
        <Img src={NotFound} alt="" />
      </ContainerImg>
      <Title>{msg}</Title>
    </Container>
  );
};

export default DataEmpty;
