import { Button, Label } from "jz-validation-form";
import { ColorBtnSecond } from "@/global/styles/globals";
import { useLanguage } from "@/global/context/languageContext";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./locationMarket";
import { MarkerPositionType } from "../../interfaces/map";

const styleMap = {
  height: "350px",
  width: "350px",
  marginBottom: "20px",
};

interface Params {
  changeForm: (pagination: number) => void;
  paginationForm: number;
  markerPosition: MarkerPositionType | null;
  handleGetLatLng: (e: any) => void;
}

const Container = styled.div`
  animation: moveBack 1s;
  transform: translateX(0px);
  @keyframes moveBack {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

const MapForm = ({
  changeForm,
  paginationForm,
  markerPosition,
  handleGetLatLng,
}: Params) => {
  const { text } = useLanguage();

  function showMapJSX() {
    return (
      <MapContainer
        style={styleMap}
        /* @ts-ignore */
        center={[-17.372443032788112, -66.16351643329834]}
        zoom={13}
      >
        {markerPosition != null && (
          <Marker position={[markerPosition.lat, markerPosition.lng]}>
            <Popup>
              Aquí se encuentra <br /> tu compañia
            </Popup>
          </Marker>
        )}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker handleClick={handleGetLatLng} />
      </MapContainer>
    );
  }

  return (
    <Container>
      <Label>Elige tu ubicacion</Label>
      {showMapJSX()}

      <Button
        ColorBtn={ColorBtnSecond}
        onClick={() => changeForm(paginationForm + 1)}
      >
        {text.createPublciationBtnNext}
      </Button>
    </Container>
  );
};

export default MapForm;
