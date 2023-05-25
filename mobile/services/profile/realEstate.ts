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

export const saveRealEstate = async (data: any) => {
  try {
    /*   console.log("====================");
    console.log(data);
    console.log("===================="); */

    const { token } = await getCookie("token");
    //save realEstate in python
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
        id_type: 6,
        bedroom: data.amountBedrooms,
        price: data.Price,
        bathroom: data.AmountBathrooms,
        squareMeter: data.SquareMeter,
        ubication: "",
      }),
    });

    const realEstate = await responsePython.json(); // get the new real estate

    //we create a new formdata to send the img to express
    let filename = data.url.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    var formData = new FormData();
    formData.append("realEstateId", realEstate.data.id);
    //@ts-ignore
    formData.append("url", { uri: data.url, name: filename, type });
    console.log(formData)
    const res = await fetch(`${config.backendExpressUrl}estate`, {
      method: "POST",
      body: formData,
      headers: new Headers({
        "content-type": "multipart/form-data",
      }),
    });

    console.log(res);

    return realEstate.data;
  } catch (error) {
    console.log(error);
  }
};
