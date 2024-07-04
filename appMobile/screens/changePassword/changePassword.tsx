import { View } from "react-native";
import React from "react";
import Header from "./components/header";
import { BtnForm } from "../../global/components/btnForm";
import { fiveColor, fourtyColor } from "../../global/constants/colors/color";
import { useLinkTo } from "@react-navigation/native";
import { useHandleSubmit } from "./hooks/useHandleSubmit";
import Form from "./components/form";
import { stylesLogin } from "../login/login";

export const ChangePassword = () => {
  const { handleSubmit, msgPost, loading } = useHandleSubmit();
  const navigation = useLinkTo();
  const handleRedirectCreateAccount = () => {
    navigation("/Login");
  };

  return (
    <View style={stylesLogin.container}>
      <Header />

      <Form handleSubmit={handleSubmit} loading={loading} msgPost={msgPost} />

      <BtnForm
        colorBtn={fourtyColor}
        colorTxt={fiveColor}
        handleSubmit={handleRedirectCreateAccount}
        txt="Iniciar sesion"
      />
    </View>
  );
};

