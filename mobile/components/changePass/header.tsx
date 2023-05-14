import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  fiveColor,
  fourtyColor,
  seventyColor,
} from "../../constants/colors/color";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar contraseña</Text>
      <Text style={styles.subTitle}>
        Ingresa el codigo que reciviste en tu email
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "80%",
    margin: 10,
  },
  title: {
    color: fiveColor,
    fontSize: 30,
  },
  subTitle: {
    color: seventyColor,
    fontSize: 22,
  },
});
