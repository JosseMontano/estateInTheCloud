import styled from "styled-components";
import { RealEstate } from "../../../interface/realEstate";
import Slider from "react-slick";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 500px;
  @media screen and (max-width: "563px") {
    margin: 10px;
  }
`;
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
  @media screen and (max-width: 470px) {
    height: 240px;
  }
`;
const ContainerContent = styled.div`
  display: grid;
  place-content: center;
`;
const Button = styled.button<{ ColorBtn: string }>`
  background-color: ${(props) => props.ColorBtn};
  color: #fff;
  padding: 1rem 1rem;
  border: none;
  border-radius: 0.2rem;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const H2 = styled.h2`
text-align: center;
text-transform: uppercase;
`
const P = styled.p`
margin-top: 10px;
`
export const ContentModal = (v: RealEstate) => {
  const data = [
    {
      iter: 1,
    },
    {
      iter: 2,
    },
    { iter: 3 },
  ];
  return (
    <Container>
      <Slider className="slick">
        {data.map((va, i) => (
          <Img src={v.url} alt="" />
        ))}
      </Slider>

      <ContainerContent>
        <H2>{v.title}</H2>
        <P>{v.description}</P>
        <Button ColorBtn={"#229ff2"}>Agregar foto</Button>
        <Button ColorBtn={"#ff26009e"}>Eliminar</Button>
      </ContainerContent>
    </Container>
  );
};
