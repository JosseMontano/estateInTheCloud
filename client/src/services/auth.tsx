import { FormLogin, FormRegister } from "../interface/formAuth";
import { http } from "./http";
import {Perfil} from '../utilities/cookie'

export const signIn = async (form: FormLogin) => {
  try {
    const response = await fetch(`${http}signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
    // const result = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (form: FormRegister) => {
  try {
    const response = await fetch(`${http}signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEmail = async() => {
  const tk = Perfil()
  try {
    const response = await fetch(`${http}me`, {
      method: 'GET',
      headers: {
        token: tk
      }
    });
  
    if (response.ok) {
      const result = await response.json();
      return result
    }
  } catch (err) {
    console.error(err);
  }
}

export const validateTokenExits = async()=>{
  const tk = Perfil()
    const response = await fetch(`${http}verifyToken`, {
      method: 'GET',
      headers: {
        token: tk
      }
    });
    return await response.json()
    /*if (response.ok) {
      const result = await response.json();
      console.log(result);
    }
  } catch (err) {
    console.error(err);
  }*/
}
