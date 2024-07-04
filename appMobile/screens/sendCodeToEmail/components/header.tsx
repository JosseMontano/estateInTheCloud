import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  fiveColor,
  fourtyColor,
  seventyColor,
} from "../../../global/constants/colors/color";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar codigo a tu correo</Text>
      <Text style={styles.subTitle}>Pronto tendras otra contra!</Text>
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
