import { ColorBtn, Title, styleMap } from "@/global/styles/globals";
import { P } from "@/global/styles/modal/perfil";
import styled from "styled-components";
import { PropertiesPlaces, PropertiesPlacesMaps } from "../types/places";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Select } from "@/global/styles/globals";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Icon from "@/global/assets/markerIcon.png";
import OptionSelect from "./optionSelect";
interface Props {
  placesNear: PropertiesPlacesMaps[];
  handleRedirectToMaps: (v: PropertiesPlaces) => void;
  types: string[];
}

const ContainerNearPlaces = styled.div`
  height: 250px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: black transparent;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NearPlaces = ({ placesNear, types }: Props) => {
  const styles = styleMap("200px");

  const [selectedType, setSelectedType] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState(placesNear);

  useEffect(() => {
    if (selectedType) {
      setFilteredPlaces(
        placesNear.filter((place) => place.types.includes(selectedType))
      );
    } else {
      setFilteredPlaces(placesNear);
    }
  }, [selectedType, placesNear]);

  const iconPerson = new L.Icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    popupAnchor: [-0, -0],
    iconSize: L.point(25, 25),
  });

  return (
    <ContainerNearPlaces>
      <Select onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Todo</option>
        {types.map((type, index) => (
          <OptionSelect key={index} type={type} />
        ))}
      </Select>

      <MapContainer
        style={styles}
        /* @ts-ignore */
        center={[-17.372443032788112, -66.16351643329834]}
        zoom={13}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {filteredPlaces.map((place, index) => (
          <Marker
            key={index}
            position={[
              place.geometry.location.lat,
              place.geometry.location.lng,
            ]}
            icon={iconPerson}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </ContainerNearPlaces>
  );
};

export default NearPlaces;
