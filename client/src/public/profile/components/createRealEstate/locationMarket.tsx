import { useMapEvents } from "react-leaflet";

interface Params {
  handleClick: (e: any) => void;
}

const LocationMarker = ({ handleClick }: Params) => {
  useMapEvents({
    click: handleClick,
  });

  return null;
};

export default LocationMarker;
