import { RealEstate } from "../../interface/realEstate";
import Slider from "react-slick";
import { getRealEstateOfOnePublication } from "../../services/realEstate";
import { useEffect, useState } from "react";

import {
  Container,
  ContainerContent,
  H2,
  P
} from "../../styles/modal/perfil";
import Load from "./modal/load";
import styled from "styled-components";
import ImgCom from "./modal/img";

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

export const ContentModal = (v: RealEstate) => {
  const [load, setLoad] = useState(true);

  const [data, setData] = useState<RealEstate[]>([]);

  const handleGetEstate = async () => {
    const res = await getRealEstateOfOnePublication(v.idrealestate);
    setData(res);
    setLoad(false);
  };

 
  useEffect(() => {
    handleGetEstate();
  }, []);

  return (
    <Container>
      {load ? (
        <Load />
      ) : (
        <Slider className="slick">
          {data.map((va, i) => (
            <div key={i}>
              <ImgCom {...va}/>
          
            </div>
          ))}
        </Slider>
      )}

      <ContainerContent>
        <H2>{v.title}</H2>
        <P>{v.description}</P>
      </ContainerContent>
    </Container>
  );
};
