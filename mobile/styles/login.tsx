import { StyleSheet } from "react-native";
import { primaryColor } from "../constants/colors/color";
import { inputStyle } from "../constants/colors/input";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
  },
  input: inputStyle,
  error: {
    color: "red",
    marginBottom: 10,
  },
});
