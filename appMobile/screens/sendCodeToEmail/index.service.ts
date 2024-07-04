import post from "../../global/utils/post";
import { SendCodeToEmailType } from "./interfaces/SendCodeToEmailType";



export const sendEmailServices = async (values: SendCodeToEmailType) => {
  return await post("sendCodeGmail", values);
};

