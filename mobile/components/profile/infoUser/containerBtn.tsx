import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface Params {
  handleRedirectCreate:()=>void;
}


const ContainerBtn = ({handleRedirectCreate}:Params) => {
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <Text style={styles.btnText}>Editar perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleRedirectCreate}>
        <Text style={styles.btnText}>Crear publicacion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContainerBtn;

const styles = StyleSheet.create({
  containerBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  btn: {
    backgroundColor: "none",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
  },
});
