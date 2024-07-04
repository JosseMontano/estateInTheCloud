import post from "../../../global/utils/post";
import { SendCodeToEmailType } from "../interfaces/changePassType";

export const changePasswordServices = async (values: SendCodeToEmailType) => {
    return await post("changePassword", values);
  };