import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../styles/login";
import { useHandleSubmit } from "../hooks/login/useHandleSubmit";
import Form from "../components/login/form";
import Header from "../components/login/header";
import { BtnForm } from "../components/global/atoms/btnForm";
import { fiveColor, fourtyColor } from "../constants/colors/color";
import { useLinkTo } from "@react-navigation/native";
import { RecuperateAccount } from "../components/login/recuperateAccount";

const Login = () => {
  const { handleSubmit, msgPost } = useHandleSubmit();

  const navigate = useLinkTo();

  const createAccount = () => {
    navigate("/Register");
  };

  

  return (
    <View style={styles.container}>
      <Header />
      <Form
        handleSubmit={handleSubmit}
        msgPost={msgPost}
        recuperateAccountJSX={RecuperateAccount}
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

export default Login;
