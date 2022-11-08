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

export const getRealEstateMostRecent = async () => {
  try {
    const response = await fetch(`${http}estateMostRecent`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {}
};

export const getRealEstateRecommendedByUser = async () => {
  try {
    const response = await fetch(`${http}estateRecommendedByUser`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {}
};

export const getRealEstateProfil = async (id: number) => {
  try {
    const response = await fetch(`${http}estate/${id}`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return { json, status };
  } catch (error) {
    console.log(error);
  }
};

export const getRealEstateByEmail = async (id: number) => {
  try {
    const response = await fetch(`${http}estate/visit/${id}`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return { json, status };
  } catch (error) {
    console.log(error);
  }
};

export const getRealEstateByHouse = async () => {
  try {
    const response = await fetch(`${http}estateByHouse`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getRealEstateByDepartament = async () => {
  try {
    const response = await fetch(`${http}estateByDepartament`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getRealEstateByStudioDepartament = async () => {
  try {
    const response = await fetch(`${http}estateByStudioApartament`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getRealEstateByGarzoniers = async () => {
  try {
    const response = await fetch(`${http}estateByGarzonier`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getRealEstateOthers = async () => {
  try {
    const response = await fetch(`${http}estateOthers`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getRealEstateOfOnePublication = async (idRealEstate: number) => {
  try {
    const response = await fetch(
      `${http}estateOfOnePublication/${idRealEstate}`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    const status = response.status;
    return { json, status };
  } catch (error) {}
};

export const getTypeRealEstate = async () => {
  try {
    const response = await fetch(`${http}type_real_estate/`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return json;
  } catch (e) {
    console.log(e);
  }
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
