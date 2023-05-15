import { useState } from "react";
import { useLinkTo } from "@react-navigation/native";
import post from "../../utils/post";
import { saveCookie } from "../../utils/cookie";

import { sendEmailServices } from "../../services/auth";
import { SendCodeToEmailType } from "../../interfaces/auth/SendCodeToEmailType";

export const useHandleSubmit = () => {
  const [msgPost, setMsgPost] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (values: SendCodeToEmailType) => {
    setLoading(true)
    const res = await sendEmailServices(values);
    setLoading(false);
    //If there is a message means that there is a error
    if (res.message) {
      setMsgPost(res.message);
      setTimeout(() => {
        setMsgPost("");
      }, 3000);
      return;
    }
  };

  return {
    msgPost,
    handleSubmit,
    loading
  };
};
