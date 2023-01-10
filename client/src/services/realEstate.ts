import { http } from "./http";
import { index } from "../utilities/getServices";
import { gql } from "@apollo/client";


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

export const getREByProfile = gql`
  query GET($idUser: Float!) {
    GET_REAL_ESTATE_BY_ID_USER(idUser: $idUser) {
      idphoto
      url
      email
      idrealestatephoto
      idrealestate
      iduser
      title
      description
      publicId
      cellphonenumber
      available
    }
  }
`;

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



export const getImgTo360 = async <T>(
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

export const deleteRealEstateProfil = gql`
  mutation DELETE_REAL_ESTATE(
    $idRealEstatePhoto: Float!
    $idPhoto: Float!
    $idRealEstate: ID!
  ) {
    DELETE_REAL_ESTATE(
      idRealEstatePhoto: $idRealEstatePhoto
      idPhoto: $idPhoto
      idRealEstate: $idRealEstate
    ) {
      idrealestate
    }
  }
`;

export const deleteRealEstateSubs = gql`
  subscription {
    DELETE_A_RE {
      id
    }
  }
`;

export const updateStateRealEstate = gql`
  mutation UPDATE_STATE_RE($id: ID!, $state: Float!) {
    UPDATE_STATE_RE(idRealEstate: $id, state: $state) {
      idRealEstate
      state
    }
  }
`;

export const updateStateRealEstateSubs = gql`
  subscription {
    UPDATE_STATE_A_RE {
      id
      state
    }
  }
`;
