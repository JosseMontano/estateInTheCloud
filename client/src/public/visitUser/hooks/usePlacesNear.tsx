import {
  PlacesType,
  PropertiesPlaces,
} from "@/global/components/dynamic/profileVisitUser/publication/types/places";
import { schools } from "@/global/data/education";
import { hospitals } from "@/global/data/hospital";
import { RealEstate } from "@/global/interfaces/realEstate";
import { Point, isNearUbi } from "@/global/utilities/coordinates";
import { useEffect, useState } from "react";

interface Props {
  v: RealEstate;
}
const UsePlacesNear = ({ v }: Props) => {
  const [placesNear, setPlacesNear] = useState([] as PlacesType[]);

  useEffect(() => {
    if (v.lat_long === null) return;

    const [lat, long] = v.lat_long.split(",");

    const point1: Point = {
      type: "Point",
      coordinates: [Number(long), Number(lat)],
    };
    let nearPlacesSchool = [] as PropertiesPlaces[];

    for (let educ of schools.features) {
      const res = isNearUbi(point1, educ.geometry as Point);
      if (res) {
        nearPlacesSchool.push({
          coordinates: educ.geometry as Point,
          ...educ.properties,
        });
      }
    }

    let nearPlacesHospital = [] as PropertiesPlaces[];

    for (let hosp of hospitals.features) {
      const res = isNearUbi(point1, hosp.geometry as Point);
      if (res) {
        nearPlacesHospital.push({
          coordinates: hosp.geometry as Point,
          ...hosp.properties,
        });
      }
    }

    setPlacesNear([
      {
        title: "Escuelas",
        properties: nearPlacesSchool,
      },
      {
        title: "Hospitales",
        properties: nearPlacesHospital,
      },
    ]);
  }, []);

  const handleRedirectToMaps = (v: PropertiesPlaces) => {
    window.open(
      `https://www.google.com/maps/?q=${v.coordinates.coordinates[1]},${v.coordinates.coordinates[0]}`
    );
  };

  return { placesNear, handleRedirectToMaps };
};

export default UsePlacesNear;
