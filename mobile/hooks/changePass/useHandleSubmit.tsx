import { useState } from "react";
import { useLinkTo } from "@react-navigation/native";
import { changePasswordServices } from "../../services/auth";
import { ChangePassType } from "../../interfaces/auth/changePassType";

export const useHandleSubmit = () => {
  const [msgPost, setMsgPost] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (values: ChangePassType) => {
    setLoading(true)
    const res = await changePasswordServices(values);
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
