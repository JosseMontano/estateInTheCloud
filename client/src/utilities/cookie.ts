import Cookies from "universal-cookie";
import { Cifrar, Descifrar } from "./cryto";

const cookies = new Cookies();

//save token in cookie
export const codeToken = (token: string) => {
  cookies.set("token", Cifrar(token), {
    path: "/",
  });
};

export const Perfil = () => {
  const tk = cookies.get("token");
  if (tk !== undefined) {
    const t = Descifrar(tk);
    return t;
  } else {
    return "";
  }
};

export const logOut = () => {
  try {
    cookies.remove("token", { path: "/", sameSite: "none" });
    return true;
  } catch (err) {
    return false;
  }
};
