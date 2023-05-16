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
    }
  }
`;