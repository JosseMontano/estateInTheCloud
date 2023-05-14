import { View } from "react-native";
import React from "react";
import Header from "../components/sendCodeToEmail/header";
import { styles } from "../styles/login";
import { BtnForm } from "../components/global/atoms/btnForm";
import { fiveColor, fourtyColor } from "../constants/colors/color";
import { useHandleSubmit } from "../hooks/sendCodeToEmail/useHandleSubmit";
import { useLinkTo } from "@react-navigation/native";
import Form from "../components/sendCodeToEmail/form";

const RecuperateAccount = () => {
  const { handleSubmit, msgPost, loading } = useHandleSubmit();
  const navigation = useLinkTo();

  const handleRedirectCreateAccount = () => {
    navigation("/ChangePassword");
  };

  return (
    <View style={styles.container}>
      <Header />

      <Form handleSubmit={handleSubmit} loading={loading} msgPost={msgPost} />

      <BtnForm
        colorBtn={fourtyColor}
        colorTxt={fiveColor}
        handleSubmit={handleRedirectCreateAccount}
        txt="Cambiar contraseña"
      />
    </View>
  );
};

export default RecuperateAccount;
