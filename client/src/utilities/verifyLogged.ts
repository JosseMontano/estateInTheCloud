import Cookies from "universal-cookie";
import { Descifrar } from "./cryto";
import { validateTokenExits } from "../services/auth";
const cookies = new Cookies();

export const verifyLogged = async () => {
  const tknReceived = await validateTokenExits();
  if (tknReceived.message === true) return true;
  return false;
};
