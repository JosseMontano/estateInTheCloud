
import { validateTokenExits } from "../services/auth";

export const verifyLogged = async () => {
  const tknReceived = await validateTokenExits();
  if (tknReceived.message === true) return true;
  return false;
};
