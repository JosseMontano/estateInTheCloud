import { useState } from "react";
import { useLinkTo } from "@react-navigation/native";

interface Params {
  service: any;
}

export const useHandleSubmit = <T,>({ service }: Params) => {
  const [msgPost, setMsgPost] = useState("");
  const navigation = useLinkTo();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: T) => {
    setLoading(true);
    const res = await service(values);
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
    loading,
  };
};
