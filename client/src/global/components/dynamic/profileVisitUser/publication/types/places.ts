import { Point } from "@/global/utilities/coordinates";

export interface PropertiesPlaces {
  OBJECTID: number;
  NOMBRE: string;
  TIPO?: string;
  SUB_SECTOR?: string;
  NIVEL?: string;
  TIPO_ESTAB?: string;
  Prueba?: string;
  //school
  DEPENDENCI?: string;
  CICLOS?: string;
  coordinates: Point;
}

export interface PlacesType {
  title: string;
  properties: PropertiesPlaces[];
}

//? places of google maps
export interface LocationRes {
  location: Location;
  name: string;
  types: string[];
}
export interface Location {
  lat: number
  lng: number
}
