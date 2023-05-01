import config from "../config/http";
import { getCookie } from "./cookie";

async function post<T, R>(url: string, body: T) {
  try {
    const { token } = await getCookie("token");

    const response = await fetch(config.backendUrl + url, {
      method: "POST",
      headers: new Headers({
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      }),

      body: JSON.stringify({
        ...body,
      }),
    });

    const res = await response.json();
    return res;
  } catch (error) {
    let msgError = "";
    if (error instanceof Error) {
      msgError = error.message;
    }
    return {
      msg: msgError,
    };
  }
}

export default post;
