import Navbar from "../navbar";
import Img1 from "../../assets/home/fondo1.jpg";
import Slider from "../home/content";
import styled from "styled-components";
import { RealEstate } from "../../interface/realEstate";

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

interface Params {
  dataComplete: { title: string; data: RealEstate[] }[];
}
const index = (params: Params) => {
  return (
    <>
      <Navbar />
      <Img src={Img1} alt="" />
      {/* Show all the estates */}
      {params.dataComplete.map((v, i) => (
        <div key={i}>
          <Slider {...v} />
        </div>
      ))}
    </>
  );
};

export default index;
