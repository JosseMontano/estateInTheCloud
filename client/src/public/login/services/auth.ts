import {
  FormLogin,
  FormLoginGoogle,
  FormRegister,
} from "@/public/login/interfaces/formAuth";
import saveCookie from "@/global/utilities/saveCookie";
import { http, headers, httpGo } from "@/config/http";
import { FormRecuperateAccount } from "@/public/login/interfaces/formAuth";
import { Token } from "@/global/utilities/getTokenCookie";

export const getMe = async () => {
  try {
    
    const response = await fetch(`${httpGo}me`, {
      method: "GET",
      headers: headers,
      credentials: "include", // This here
    });

    const res = await response.json();

    return {
      role: res.role,
    }

  } catch (error) {
    console.log(error);
    return {
      role: 2,
    }
  }

}

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

export const signInGoogle = async (form: FormLoginGoogle) => {
  try {
    const { displayName, email, phoneNumber, photoURL, uid } = form;
    const response = await fetch(`${httpGo}loginGoogle`, {
      method: "POST",
      headers: headers,
      credentials: "include", // This here
      body: JSON.stringify({
        email,
        displayName,
        phoneNumber,
        photoURL,
        uid,
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
    const response = await fetch(`${httpGo}sendCodeGmail`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: form.email,
      }),
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
    const response = await fetch(`${httpGo}changePassword`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        code_recuperation: form.codeGmail,
      }),
    });
    const ok = await response.json();
    console.log(ok);
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};
