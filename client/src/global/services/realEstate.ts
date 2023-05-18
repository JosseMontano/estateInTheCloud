import { http, httpGo } from "../../config/http";
import { index } from "@/global/utilities/getServices";
import { gql } from "@apollo/client";

export const getREByProfile = gql`
  query GET($idUser: Float!) {
    GET_REAL_ESTATE_BY_ID_USER(idUser: $idUser) {
      id_photo
      id_real_estate_photo
      id_real_estate
      id_user
      url
      title
      description
      email
      cellphone_number
      available
      amount_bedroom
      price
      amount_bathroom
      square_meter
      lat_long
      address
    }
  }
`;

export const getRealEstateOfOnePublication = async (idRealEstate?: number) => {
  const url = `${httpGo}realEstate/${idRealEstate}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getTypeRealEstate = async () => {
  const url = `${httpGo}typeRealEstate`;
  const { json, status } = await index(url);
  return { json, status };
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
