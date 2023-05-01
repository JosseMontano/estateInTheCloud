import { LoginFormValues } from "../interfaces/login";
import post from "../utils/post";

export const loginServices = async (values: LoginFormValues) => {
  return await post("signin", values);
};
