import { StyleSheet } from "react-native";
import { inputStyle } from "../constants/colors/input";

export const styleError = StyleSheet.create({
    text: {
      color: "red",
      marginBottom: 10,
    },
  });

export const styleInput = StyleSheet.create({
    //@ts-ignore
    input: inputStyle,
})

export const stylesShadow= {
  shadowOffset: {
    width: 0, // Horizontal shadow offset
    height: 2, // Vertical shadow offset
  },
  shadowOpacity: 0.25, // Shadow opacity
  shadowRadius: 3.84, // Shadow blur radius
  elevation: 3, // Elevation for Android
}
  