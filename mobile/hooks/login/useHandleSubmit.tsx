import { useState } from "react";
import { useLinkTo } from "@react-navigation/native";
import post from "../../utils/post";
import { saveCookie } from "../../utils/cookie";
import { LoginFormValues } from "../../interfaces/auth/login";
import { loginServices } from "../../services/auth";

export const useHandleSubmit = () => {
  const [msgPost, setMsgPost] = useState("");
  const navigation = useLinkTo();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: LoginFormValues) => {
    setLoading(true)
    const res = await loginServices(values);
    setLoading(false);
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
    loading
  };
};
