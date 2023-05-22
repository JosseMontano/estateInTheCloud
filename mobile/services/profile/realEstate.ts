import { gql } from "@apollo/client";
import post from "../../utils/post";
import config from "../../config/http";
import { getCookie } from "../../utils/cookie";

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

export const saveRealEstate = async (data: any, photo: any) => {
  try {
    const { token } = await getCookie("token");
    //save realEstate in python
    const ubicacion = "";
    const responsePython = await fetch(`${config.backendPython}real-estate`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        id_user: data.id_user,
        id_type: data.id_type,
        bedroom: data.bedroom,
        price: data.price,
        bathroom: data.bathroom,
        squareMeter: data.squareMeter,
        ubication: ubicacion,
      }),
    });

    const realEstate = await responsePython.json(); // get the new real estate

    //we create a new formdata to send the img to express
    var formData = new FormData();
    formData.append("realEstateId", realEstate.data.id);
    formData.append("url", photo);

    await fetch(`${config.backendUrl}estate`, {
      method: "POST",
      body: formData,
    });

    return realEstate.data;
  } catch (error) {
    console.log(error);
  }
};
