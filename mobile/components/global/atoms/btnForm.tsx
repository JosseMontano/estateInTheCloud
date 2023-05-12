import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { btnStyle, btnTxtStyle } from "../../../constants/colors/btn";

interface Params {
  handleSubmit: () => void;
  colorBtn: string;
  colorTxt: string;
  txt:string;
}

export const BtnForm = ({ colorBtn, colorTxt, handleSubmit, txt }: Params) => {
  return (
    <TouchableOpacity style={btnStyle(colorBtn)} onPress={() => handleSubmit()}>
      <Text style={btnTxtStyle(colorTxt)}>{txt}</Text>
    </TouchableOpacity>
  );
};

 ;
