import { getCookie } from "./cookie";
import config from "../config/http";

export const getServices = async <T>(endPoint: string) => {
  try {
    const { token } = await getCookie("token");
    const response = await fetch(config.backendUrl + endPoint, {
      method: "GET",
      headers: new Headers({
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return {
        data: result,
      };
    }
  } catch (err) {
    console.error(err);
  }
};
