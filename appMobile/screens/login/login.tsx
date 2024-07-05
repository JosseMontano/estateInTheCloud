import { useLinkTo } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ImageStyle,
} from "react-native";
import Header from "./components/header";
import Form from "./components/form";
import { useHandleSubmit } from "./hooks/useHandleSubmit";
import { fiveColor, primaryColor } from "../../global/constants/colors/color";
import { inputStyle } from "../../global/constants/colors/input";
import { RecuperateAccount } from "./components/recuperateAccount";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import config from "../../global/config/http";
import { AntDesign } from "@expo/vector-icons";
import { stylesShadow } from "../../global/styles/global";

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
      <View style={stylesLogin.content}>
        <Image
          source={require("./assets/logoRealEstate.png")}
          style={stylesLogin.image as StyleProp<ImageStyle>}
        />
        <Header />
        <Form handleSubmit={handleSubmit} msgPost={msgPost} loading={loading} />
      </View>
      <Text onPress={() => createAccount()}>
        -------------- Create una cuenta --------------
      </Text>

      <View style={stylesLogin.containerRedSocial}>
        <TouchableOpacity
          onPress={handlePress}
          style={[stylesLogin.contentRedSocial, stylesShadow]}
        >
          <Image
            source={require("./assets/googleLogo.png")}
            style={stylesLogin.imageRedSocial as StyleProp<ImageStyle>}
          />
          <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePress}
          style={[stylesLogin.contentRedSocial, stylesShadow]}
        >
          <Image
            source={require("./assets/databaseLogo.png")}
            style={stylesLogin.imageRedSocial as StyleProp<ImageStyle>}
          />
          <Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
    width: "100%",
    gap: 10,
  },
  content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  image: {
    height: 130,
    width: 130,
    objectFit: "cover",
  },
  //@ts-ignore
  input: inputStyle,
  error: {
    color: "red",
    marginBottom: 10,
  },
  containerRedSocial: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  contentRedSocial: {
    width: 80,
    height: 50,
    borderRadius: 10,
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  imageRedSocial: {
    width: 40,
    height: 40,
    objectFit: "cover",
  },
});
