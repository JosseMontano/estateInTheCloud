import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { sixColor } from "../../../constants/colors/color";

interface Params {
  handleRedirectHome: () => void;
}

const ContainerBtn = ({ handleRedirectHome }: Params) => {
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => handleRedirectHome()}
      >
        <Text style={styles.btnText}>{"<-"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContainerBtn;

const styles = StyleSheet.create({
  containerBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: 2,
    position: "absolute",
    width: "100%",
    marginTop: 10,
  },
  btnBack: {
    backgroundColor: "rgba(255, 255, 255,.5)",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    fontSize: 32,
    padding: 10,
    color: sixColor,
  },
});
