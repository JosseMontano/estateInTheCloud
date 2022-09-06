import Cookies from "universal-cookie";
import { Cifrar } from "./cookies";

export const codeToken = (token:string) => {
  const cookies = new Cookies();
  cookies.set("token", Cifrar(token), {
    path: "/",
  });
};
