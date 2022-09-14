import Navbar from "../navbar";
import Img1 from "../../assets/home/fondo1.jpg";
import Slider from "../home/content";
import styled from "styled-components";
import { Rick } from "../../interface/rick";

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const ContainerSlider = styled.div``;
interface Params {
  dataComplete: { title: string; data: Rick[] }[];
}
const index = (params: Params) => {
  return (
    <>
      <Navbar />
      <Img src={Img1} alt="" />
      {/* Show all the estates */}
      {params.dataComplete.map((v, i) => (
        <ContainerSlider key={i}>
          <Slider {...v} />
        </ContainerSlider>
      ))}
    </>
  );
};

export default index;
