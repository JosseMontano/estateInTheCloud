import { FormLogin, FormRegister } from "@/public/login/interfaces/formAuth";
import saveCookie from "@/global/utilities/saveCookie";
import { http, headers, httpGo } from "@/config/http";
import { FormRecuperateAccount } from "@/public/login/interfaces/formAuth";

export const signIn = async (form: FormLogin) => {
  try {
    const response = await fetch(`${httpGo}signin`, {
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
      saveCookie(res.token, "token");
    }
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (form: FormRegister) => {
  try {
    const response = await fetch(`${httpGo}signup`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        cellphone_number: form.numberPhone,
        password: form.password,
      }),
    });
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const sendCodeGmail = async (form: FormRecuperateAccount) => {
  try {
    const response = await fetch(`${http}recuperateAccount/${form.email}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({}),
    });
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

export const recuperateAccount = async (form: FormRecuperateAccount) => {
  try {
    const response = await fetch(`${http}changePassword`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        codeEmail: form.codeGmail,
      }),
    });
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};
