import { http } from "@/config/http";
import { Token } from "@/global/utilities/getTokenCookie";

export const getPlaces = async <T>(lat: string, long: string) => {
  try {
    //save realEstate in python
    const res = await fetch(`${http}getPlaces`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: Token,
      },
      body: JSON.stringify({
        lat,
        long,
      }),
    });

    const response = (await res.json()) as T;

    return response;
  } catch (error) {
    console.log(error);
    return {} as T;
  }
};
