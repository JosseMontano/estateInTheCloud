import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RealEstate } from "../../../interfaces/home/realEstate";

interface Params {
  data: RealEstate[];
}

const InfoPost = ({ data }: Params) => {
  return (
    <View>
      {data.map((v) => (
        <Image source={{ uri: v.url }} style={styles.img} />
      ))}
    </View>
  );
};

export default InfoPost;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
});
