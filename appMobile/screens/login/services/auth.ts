import { LoginFormValues } from "../interfaces/login";

import post from "../../../global/utils/post";
import { getServices } from "../../../global/utils/getServices";

export const loginServices = async (values: LoginFormValues) => {
  return await post("signin", values);
};

export const getMeServices = async () => {
  const res = await getServices("me");
  return res;
};
