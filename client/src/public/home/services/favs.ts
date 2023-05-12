import { headers, httpGo } from "@/config/http";
import { FavsPostType } from "../interfaces/favs";

export const postFavs = async (form: FavsPostType) => {
  try {
    const response = await fetch(`${httpGo}favorite-real-estate`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        user_id: form.user_id,
        real_estate_id: form.real_estate_id,
      }),
    });
    if (response.ok) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
  }
};
