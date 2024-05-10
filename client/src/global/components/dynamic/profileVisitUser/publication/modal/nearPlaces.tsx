import { ColorBtn, Title } from "@/global/styles/globals";
import { P } from "@/global/styles/modal/perfil";
import styled from "styled-components";
import { PlacesType, PropertiesPlaces } from "../types/places";

interface Props {
  placesNear: PlacesType[];
  handleRedirectToMaps: (v: PropertiesPlaces) => void
}

const ContainerNearPlaces = styled.div`
  height: 250px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: black transparent;
`;

const NearPlaces = ({ placesNear, handleRedirectToMaps }: Props) => {
 

  return (
    <ContainerNearPlaces>
      {placesNear.map((v, i) => (
        <>
          <Title colorText={ColorBtn} key={i}>
            {v.title}
          </Title>
          {v.properties.map((va, i) => (
            <P
              key={i}
              onClick={() => handleRedirectToMaps(va)}
              style={{ cursor: "pointer" }}
            >
              {i + 1}. {va.NOMBRE} {va.DEPENDENCI && "-" + va.DEPENDENCI}
              {va.NIVEL && "-" + va.NIVEL}
            </P>
          ))}
        </>
      ))}
    </ContainerNearPlaces>
  );
};

export default NearPlaces;
