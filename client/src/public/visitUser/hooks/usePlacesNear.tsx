import {
  PropertiesPlaces,
  PropertiesPlacesMaps,
} from "@/global/components/dynamic/profileVisitUser/publication/types/places";
import { RealEstate } from "@/global/interfaces/realEstate";
import { useEffect, useState, useRef } from "react";
import { getPlaces } from "../services/getplaces";

interface Props {
  v: RealEstate;
}
const UsePlacesNear = ({ v }: Props) => {
  const [placesNear, setPlacesNear] = useState([] as PropertiesPlacesMaps[]);
  const [types, setTypes] = useState([] as string[]);
  const [loadingPlacesNear, setLoadingPlacesNear] = useState(true);

  const handleGetPlaces = async (lat: string, long: string) => {
    setLoadingPlacesNear(true);
    const res = await getPlaces<PropertiesPlacesMaps[]>(lat, long);

    const allTypes = res.map((v) => v.types).flat();

    setPlacesNear(res);
    setTypes(allTypes);

    setLoadingPlacesNear(false);
  };

  useEffect(() => {
    if (v.lat_long === null) return;

    const [lat, long] = v.lat_long.split(",");
    handleGetPlaces(lat, long);
  }, []);

  const handleRedirectToMaps = (v: PropertiesPlaces) => {
    window.open(
      `https://www.google.com/maps/?q=${v.coordinates.coordinates[1]},${v.coordinates.coordinates[0]}`
    );
  };

  return { types, placesNear, handleRedirectToMaps, loadingPlacesNear };
};

export default UsePlacesNear;
