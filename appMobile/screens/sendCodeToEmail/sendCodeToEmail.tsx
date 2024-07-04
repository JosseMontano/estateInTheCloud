import { View } from "react-native";
import React from "react";
import Header from "./components/header";
import { stylesLogin } from "../login/login";
import { BtnForm } from "../../global/components/btnForm";
import { fiveColor, fourtyColor } from "../../global/constants/colors/color";
import { useHandleSubmit } from "./hooks/useHandleSubmit";
import { useLinkTo } from "@react-navigation/native";
import Form from "./components/form";

export const RecuperateAccount = () => {
  const { handleSubmit, msgPost, loading } = useHandleSubmit();
  const navigation = useLinkTo();

  const handleRedirectCreateAccount = () => {
    navigation("/ChangePassword");
  };

  return (
    <View style={stylesLogin.container}>
      <Header />

      <Form handleSubmit={handleSubmit} loading={loading} msgPost={msgPost} />

      <BtnForm
        colorBtn={fourtyColor}
        colorTxt={fiveColor}
        handleSubmit={handleRedirectCreateAccount}
        txt="Cambiar contraseña"
      />
    </View>
  );
};


