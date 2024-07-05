import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fiveColor, seventyColor } from "../../../global/constants/colors/color";


const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola de nuevo!</Text>
      <Text style={styles.subTitle}>Inicia sesion en tu cuenta</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    width: "100%",
    margin: 10,
  
  },
  title: {
    color: seventyColor,
    fontSize: 36,
  },
  subTitle: {
     color:seventyColor,
    fontSize: 16,
  },
});
