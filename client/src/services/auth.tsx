import {
  FormLogin,
  FormRegister,
  FormRecuperateAccount,
} from "../interface/formAuth";
import { http, headers } from "./http";

export const signIn = async (form: FormLogin) => {
  try {
    const response = await fetch(`${http}signin`, {
      method: "POST",
      headers: headers,
      credentials: "include", // This here
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    const res = await response.json();
    if (res.auth) {
      document.cookie = `token=${res.token}; max-age=${
        60 * 60 * 24
      }; path=/; samesite=stric`;
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (form: FormRegister) => {
  try {
    const response = await fetch(`${http}signup`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
        secrect_password: form.secrect_password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const recuperateAccount = async (form: FormRecuperateAccount) => {
  try {
    const response = await fetch(`${http}recuperateAccount`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        secret_password: form.secrect_password,
      }),
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEmail = async () => {
  try {
    const token = document.cookie.replace("token=", "");
    const response = await fetch(`${http}me`, {
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
