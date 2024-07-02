import { useState } from "react";
import { useLinkTo } from "@react-navigation/native";
import { saveCookie } from "../../../global/utils/cookie";
import { LoginFormValues } from "../interfaces/login";
import { getMeServices, loginServices } from "../services/auth";
import { UserType } from "../../../global/interfaces/user";
import { UseUser } from "../../../global/store/user";

export const useHandleSubmit = () => {
  const [msgPost, setMsgPost] = useState("");
  const navigation = useLinkTo();
  const [loading, setLoading] = useState(false);

  const { loadUser } = UseUser();

  const handleSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    const res = await loginServices(values);
    setLoading(false);
    console.log("aqui1");
    //If there is a message means that there is a error
    if (res.message) {
      setMsgPost(res.message);
      setTimeout(() => {
        setMsgPost("");
      }, 3000);
      return;
    }
    //save the user in context
    const resGetMe = await getMeServices();
    const userApi: UserType = {
      email: resGetMe?.data.email,
      id: resGetMe?.data.id,
      user_name: resGetMe?.data.user_name,
      url_photo: resGetMe?.data.url_photo,
      cellphone_number: resGetMe?.data.cellphone_number,
    };
    loadUser(userApi);

    await saveCookie("token", res.token);
    navigation("/Home");
  };

  return {
    msgPost,
    handleSubmit,
    loading,
  };
};
