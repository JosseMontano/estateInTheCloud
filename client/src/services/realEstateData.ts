import { RealEstate } from "../interface/realEstateData";
import { http } from "./http";

export const saveRealEstate = async (form: RealEstate) => {
    try {
      const response = await fetch(`${http}estate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          id_user: form.idUser,
        }),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };