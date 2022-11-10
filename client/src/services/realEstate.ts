import { RealEstate } from "../interface/realEstate";
import { http, headers } from "./http";
import { index } from "../utilities/getServices";

export const getRealEstateAll = async () => {
  const url = `${http}estate`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateMostRecent = async () => {
  const url = `${http}estateMostRecent`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateRecommendedByUser = async () => {
  const url = `${http}estateRecommendedByUser`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateProfil = async (id: number) => {
  const url = `${http}estate/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateByEmail = async (id: number) => {
  const url = `${http}estate/visit/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateByHouse = async () => {
  const url = `${http}estateByHouse`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateByDepartament = async () => {
  const url = `${http}estateByDepartament`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateByStudioDepartament = async () => {
  const url = `${http}estateByStudioApartament`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateByGarzoniers = async () => {
  const url = `${http}estateByGarzonier`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateOthers = async () => {
  const url = `${http}estateOthers`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getRealEstateOfOnePublication = async (idRealEstate: number) => {
  const url = `${http}estateOfOnePublication/${idRealEstate}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getTypeRealEstate = async () => {
  const url = `${http}type_real_estate`;
  const { json, status } = await index(url);
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
  try {
    const response = await fetch(
      `${http}estate/${idRealEstatePhoto}/${idPhoto}/${idRealEstate}`,
      {
        method: "DELETE",
      }
    );
    return response;
  } catch (error) {}
};

export const updateStateRealEstate = async (id: Number, available: Number) => {
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
