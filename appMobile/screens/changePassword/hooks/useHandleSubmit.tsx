import { useState } from "react";
import { changePasswordServices } from "../services/changePassword";
import { ChangePassType } from "../interfaces/changePassType";

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
