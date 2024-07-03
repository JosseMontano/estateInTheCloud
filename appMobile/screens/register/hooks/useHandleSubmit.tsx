import { useState } from "react";
import { useLinkTo } from "@react-navigation/native";
import { saveCookie } from "../../../global/utils/cookie";
import { signUpServices } from "../services/register";
import { SignUpType } from "../interfaces/register";

export const useHandleSubmit = () => {
  const [msgPost, setMsgPost] = useState("");
  const navigation = useLinkTo();

  const handleSubmit = async (values: SignUpType) => {
    const res = await signUpServices(values);
    //If there is a message means that there is a error
    if (res.message) {
      setMsgPost(res.message);
      setTimeout(() => {
        setMsgPost("");
      }, 3000);
      return;
    }
    await saveCookie("token", res.token);
    navigation("/Home");
  };

  return {
    msgPost,
    handleSubmit,
  };
};
