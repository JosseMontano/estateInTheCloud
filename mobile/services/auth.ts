import { SendCodeToEmailType } from "../interfaces/auth/SendCodeToEmailType";
import { LoginFormValues } from "../interfaces/auth/login";
import { SignUpType } from "../interfaces/auth/register";
import { getServices } from "../utils/getServices";
import post from "../utils/post";

export const loginServices = async (values: LoginFormValues) => {
  return await post("signin", values);
};

export const getMeServices = async () => {
  const res = await getServices("me");
  return res;
};

export const signUpServices = async (values: SignUpType) => {
  return await post("signup", values);
};

export const sendEmailServices = async (values: SendCodeToEmailType) => {
  return await post("sendCodeGmail", values);
};

export const changePasswordServices = async (values: SendCodeToEmailType) => {
  return await post("changePassword", values);
};