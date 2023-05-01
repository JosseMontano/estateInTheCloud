import { Text } from "react-native";
import React from "react";
import { styles } from "../../styles/login";

interface Params {
  val: string | undefined;
  touched: boolean | undefined;
  msg: string | undefined;
}

const Error = ({ msg, touched, val }: Params) => {
  return <>{val && touched && <Text style={styles.error}>{msg}</Text>}</>;
};

export default Error;
