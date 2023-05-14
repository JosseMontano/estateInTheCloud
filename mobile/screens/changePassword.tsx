import { TextInput, View } from "react-native";
import React from "react";
import { styles } from "../styles/login";
import Header from "../components/changePass/header";
import { BtnForm } from "../components/global/atoms/btnForm";
import { fiveColor, fourtyColor } from "../constants/colors/color";
import { useLinkTo } from "@react-navigation/native";
import { useHandleSubmit } from "../hooks/changePass/useHandleSubmit";
import Form from "../components/changePass/form";

const ChangePassword = () => {
  const { handleSubmit, msgPost, loading } = useHandleSubmit();
  const navigation = useLinkTo();
  const handleRedirectCreateAccount = () => {
    navigation("/Login");
  };

  return (
    <View style={styles.container}>
      <Header />

      <Form handleSubmit={handleSubmit} loading={loading} msgPost={msgPost} />

      <BtnForm
        colorBtn={fourtyColor}
        colorTxt={fiveColor}
        handleSubmit={handleRedirectCreateAccount}
        txt="Iniciar sesion"
      />
    </View>
  );
};

export default ChangePassword;
