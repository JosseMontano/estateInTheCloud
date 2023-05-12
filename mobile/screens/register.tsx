import { StyleSheet, View } from "react-native";
import React from "react";
import { useLinkTo } from "@react-navigation/native";
import {
  fiveColor,
  fourtyColor,
  primaryColor,
} from "../constants/colors/color";
import { BtnForm } from "../components/global/atoms/btnForm";
import { useHandleSubmit } from "../hooks/register/useHandleSubmit";
import Header from "../components/login/header";
import Form from "../components/register/form";
import { RecuperateAccount } from "../components/login/recuperateAccount";

const Register = () => {
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

export default Register;
