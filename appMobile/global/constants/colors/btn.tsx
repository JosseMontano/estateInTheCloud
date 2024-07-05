import { StyleSheet } from "react-native";

export const btnStyle = (color: string, margin=true,) => {
  const styles = StyleSheet.create({
    btn: {
      width: "50%",
      padding: 10,
      backgroundColor: color,
      borderRadius: 30,
      alignItems: "center",
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
