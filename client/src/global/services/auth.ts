import { http, headers, httpGo } from "../../config/http";

export const getEmail = async () => {
  try {
    const token = document.cookie.replace("token=", "");
    const response = await fetch(`${httpGo}me`, {
      headers: { authorization: token },
      credentials: "include",
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};

export const validateTokenExits = async () => {
  const token = document.cookie.replace("token=", "");
  const response = await fetch(`${http}verifyToken`, {
    headers: { authorization: token },
  });
  const res = await response.json();
  return res;
};

export const logOut = async () => {
  document.cookie = `token=; max-age=0`;
  try {
    const response = await fetch(`${http}logout`, {
      headers: headers,
      credentials: "include",
    });

    if (response.ok) {
      const result = await response.json();
      return result.auth;
    }
  } catch (err) {
    console.error(err);
  }
};
