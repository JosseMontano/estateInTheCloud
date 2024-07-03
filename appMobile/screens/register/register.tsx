import { StyleSheet, View } from "react-native";
import React from "react";
import { useLinkTo } from "@react-navigation/native";
import {
  fiveColor,
  fourtyColor,
  primaryColor,
} from "../../global/constants/colors/color";
import { BtnForm } from "../../global/components//btnForm";
import { useHandleSubmit } from "../register/hooks/useHandleSubmit";
import Header from "../login/components/header";
import Form from "./components/form";
import { RecuperateAccount } from "../login/components/recuperateAccount";

export const RegisterScreen = () => {
  const { handleSubmit, msgPost } = useHandleSubmit();

  const navigate = useLinkTo();

  const login = () => {
    navigate("/Login");
  };

  return (
    <View style={stylesContainer.container}>
      <Header />

      <Form
        handleSubmit={handleSubmit}
        msgPost={msgPost}
        recuperateAccountJSX={RecuperateAccount}
      />

      <BtnForm
        colorBtn={fourtyColor}
        colorTxt={fiveColor}
        handleSubmit={login}
        txt="Iniciar sesion"
      />
    </View>
  );
};

const stylesContainer = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
  },
});
