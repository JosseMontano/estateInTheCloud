import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/header";
import Form from "./components/form";
import { useHandleSubmit } from "./hooks/useHandleSubmit";
import { BtnForm } from "../../global/components/btnForm";
import {
  fiveColor,
  fourtyColor,
  primaryColor,
} from "../../global/constants/colors/color";
import { inputStyle } from "../../global/constants/colors/input";
import { RecuperateAccount } from "./components/recuperateAccount";

export const AuthScreen = () => {
  const { handleSubmit, msgPost, loading } = useHandleSubmit();

  const navigate = useLinkTo();

  const createAccount = () => {
    navigate("/Register");
  };
  return (
    <View style={stylesLogin.container}>
      <Header />
      <Form
        handleSubmit={handleSubmit}
        msgPost={msgPost}
        recuperateAccountJSX={RecuperateAccount}
        loading={loading}
      />
      <BtnForm
        colorBtn={fourtyColor}
        colorTxt={fiveColor}
        handleSubmit={() => createAccount()}
        txt="Crear cuenta"
      />
    </View>
  );
};

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
  },
  //@ts-ignore
  input: inputStyle,
  error: {
    color: "red",
    marginBottom: 10,
  },
});
