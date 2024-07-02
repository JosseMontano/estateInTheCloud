import { Text } from "react-native";
import React from "react";
import { stylesLogin } from "../../screens/login/login";

interface Params {
  val: string | undefined;
  touched: boolean | undefined;
  msg: string | undefined;
}

const Error = ({ msg, touched, val }: Params) => {
  return <>{val && touched && <Text style={stylesLogin.error}>{msg}</Text>}</>;
};

export default Error;
