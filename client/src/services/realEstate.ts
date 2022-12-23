import { http, headers } from "./http";
import { index } from "../utilities/getServices";
import deleteServ from "../utilities/deleteServices";

export const getRealEstateAll = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${http}estate`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getRealEstateMostRecent = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${http}estateMostRecent`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getRealEstateRecommendedByUser = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${http}estateRecommendedByUser`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getRealEstateProfil = async (id?: number) => {
  const url = `${http}estate/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateByEmail = async (id?: number) => {
  const url = `${http}estate/visit/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateOfOnePublication = async (idRealEstate?: number) => {
  const url = `${http}estateOfOnePublication/${idRealEstate}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getTypeRealEstate = async () => {
  const url = `${http}type_real_estate`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateByType = async <T>(
  type: string
): Promise<{ json: T; status: number }> => {
  const url = `${http}estateByType/${type}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getDestinates = async <T>(
  id: number
): Promise<{ json: T; status: number }> => {
  const url = `${http}photo/${id}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const saveRealEstate = async (data: FormData) => {
  try {
    const response = await fetch(`${http}estate`, {
      method: "POST",
      body: data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addNewPhotoToRealEstate = async (
  id_real_estate: number,
  data: FormData
) => {
  try {
    const res = await fetch(`${http}addPhotoToRealEstate/${id_real_estate}`, {
      method: "POST",
      body: data,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRealEstateProfil = async (
  idRealEstatePhoto: number,
  idPhoto: number,
  idRealEstate: number
) => {
  const url = `${http}estate/${idRealEstatePhoto}/${idPhoto}/${idRealEstate}`;
  const response = await deleteServ(url);
  return response;
};

export const updateStateRealEstate = async (id: Number, available: number) => {
  try {
    const response = await fetch(`${http}availableEstate/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        available,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
