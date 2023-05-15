import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subInfo}>4 publicaciones</Text>
      <Text style={styles.subInfo}>100 seguidores</Text>
      <Text style={styles.subInfo}>100 seguidos</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  subInfo: {
    color: "#fff",
    fontSize: 14,
  },
});
