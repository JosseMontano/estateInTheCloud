import { http, httpPy } from "@/config/http";
import { Token } from "@/global/utilities/getTokenCookie";
export const saveRealEstate = async (
  data: any,
  photo: any,
  markerPosition: any
) => {
  try {
    //save realEstate in python
    const ubicacion=markerPosition.lat + ", " + markerPosition.lng
    const responsePython = await fetch(`${httpPy}real-estate`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: Token,
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

    await fetch(`${http}estate`, {
      method: "POST",
      body: formData,
    });

    return realEstate.data;
  } catch (error) {
    console.log(error);
  }
};
