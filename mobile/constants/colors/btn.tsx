import { StyleSheet } from "react-native";

export const btnStyle = (color: string, margin=true,) => {
  const styles = StyleSheet.create({
    btn: {
      width: "80%",
      padding: 10,
      backgroundColor: color,
      borderRadius: 5,
      alignItems: "center",
      marginTop: margin ? 10 : 0,
    },
  });
  return styles.btn;
};

export const btnTxtStyle = (color: string) => {
  const styles = StyleSheet.create({
    buttonText: {
      color: color,
      fontSize: 18,
    },
  });
  return styles.buttonText;
};
