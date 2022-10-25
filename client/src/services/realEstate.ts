import { RealEstate } from "../interface/realEstate";
import { http, headers } from "./http";

export const getRealEstateAll = async () => {
  try {
    const response = await fetch(`${http}estate`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {}
};

export const getRealEstateMostRecent = async() => {
  try {
    const response = await fetch(`${http}estateMostRecent`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {}
}

export const getRealEstateProfil = async (id: number) => {
  try {
    const response = await fetch(`${http}estate/${id}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.log(error)
  }
};

export const getRealEstateOfOnePublication = async (idRealEstate:number) => {
  try {
    const response = await fetch(`${http}estateOfOnePublication/${idRealEstate}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {}
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

export const addNewPhotoToRealEstate = async (id_real_estate:number, data:FormData) => {
  try {
    const res = await fetch(`${http}addPhotoToRealEstate/${id_real_estate}`, {
      method: "POST",
      body: data,
    });
    return res;
  } catch (error) {
    console.log(error)
  }
}

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
