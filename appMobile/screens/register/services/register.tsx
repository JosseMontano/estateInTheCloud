import post from "../../../global/utils/post";
import { SignUpType } from "../interfaces/register";

export const signUpServices = async (values: SignUpType) => {
  return await post("signup", values);
};
