import { gql } from "@apollo/client";
import post from "../../utils/post";
import config from "../../config/http";
import { getCookie } from "../../utils/cookie";
import { getServices } from "../../utils/getServices";

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

export const getRealEstateType = async () => {
  const res = await getServices("typeRealEstate");
  return res;
};


export const saveRealEstate = async (data: any, photo: any) => {
  try {
    console.log("====================");
    console.log(data);
    console.log(photo);
    console.log("====================");

 const { token } = await getCookie("token");
    //save realEstate in python
    const ubicacion = "";
    const responsePython = await fetch(`${config.backendPython}real-estate`, {
      method: "POST",
      headers: new Headers({
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      }),
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        id_user: data.id_user,
        id_type: data.id_type,
        bedroom: data.amountBedrooms,
        price: data.Price,
        bathroom: data.AmountBathrooms,
        squareMeter: data.SquareMeter,
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
