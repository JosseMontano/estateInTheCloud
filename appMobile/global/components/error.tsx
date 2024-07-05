import { Text } from "react-native";
import React from "react";
import { styleError } from "../styles/global";

interface Params {
  val: string | undefined;
  touched: boolean | undefined;
  msg: string | undefined;
}

const Error = ({ msg, touched, val }: Params) => {
  return <>{val && touched && <Text style={styleError.text}>{msg}</Text>}</>;
};

export default Error;
