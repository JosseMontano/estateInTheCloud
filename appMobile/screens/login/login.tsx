import { useLinkTo } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
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
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import config from "../../global/config/http";

export const AuthScreen = () => {
  const appUrl = Linking.createURL("");
  const { handleSubmit, msgPost, loading } = useHandleSubmit();

  const navigate = useLinkTo();

  const createAccount = () => {
    navigate("/Register");
  };

  const getParamsStr = (params: Record<string, string | undefined>) => {
    const arr = [];
    for (const key in params) {
      if (params[key]) {
        arr.push(`${key}=${params[key]}`);
      }
    }
    return "?" + arr.join("&");
  };

  const getUserData = async (result: any) => {
    const { url } = result;
    if (url) {
      const params = Linking.parse(url) as any;
      const { userId, name } = params.queryParams;
      console.log(userId, name);
    }
  };

  const handlePress = async () => {
    const baseUrl = config.oauthGoogle;
    const params = {
      response_type: "code",
      client_id: config.clientIdGoogle,
      redirect_uri: config.backGoogle + "google",
      scope: config.apiGoogle,
      access_type: "offline",
      prompt: "consent",
      state: appUrl,
    };
    const url = baseUrl + getParamsStr(params);
    const result = await WebBrowser.openAuthSessionAsync(
      url,
      config.backGoogle + "google"
    );

    getUserData(result);
  };

  useEffect(() => {
    Linking.addEventListener("url", getUserData);
  }, []);

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
      <TouchableOpacity onPress={handlePress}>
        {<Text>Google</Text>}
      </TouchableOpacity>
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
