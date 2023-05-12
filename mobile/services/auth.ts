import { LoginFormValues } from "../interfaces/auth/login";
import { SignUpType } from "../interfaces/auth/register";
import post from "../utils/post";

export const loginServices = async (values: LoginFormValues) => {
  return await post("signin", values);
};

export const signUpServices = async (values: SignUpType) => {
  return await post("signup", values);
};
