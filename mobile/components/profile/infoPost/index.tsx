import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { RealEstate } from "../../../interfaces/home/realEstate";
import ImageComponent from "./image";

interface Params {
  data: RealEstate[];
}

const InfoPost = ({ data }: Params) => {
  return (
    <View style={styles.container}>
      {data.map((v) => (
        <ImageComponent v={v} />
      ))}
    </View>
  );
};

export default InfoPost;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
  },
});
