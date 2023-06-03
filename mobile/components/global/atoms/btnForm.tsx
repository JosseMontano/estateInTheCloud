import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { btnStyle, btnTxtStyle } from "../../../constants/colors/btn";

interface Params {
  handleSubmit: () => void;
  colorBtn: string;
  colorTxt: string;
  txt: string;
  loading?: boolean;
}

export const BtnForm = ({
  colorBtn,
  colorTxt,
  handleSubmit,
  txt,
  loading,
}: Params) => {
  return (
    <TouchableOpacity
      style={btnStyle(colorBtn)}
      onPress={() => handleSubmit()}
    >
      <Text style={btnTxtStyle(colorTxt)}>{loading ? "Cargando..." : txt}</Text>
    </TouchableOpacity>
  );
};
