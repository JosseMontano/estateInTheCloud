import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RealEstate } from "../../../interfaces/home/realEstate";

interface Params {
  v: RealEstate;
}

const ImageComponent = ({ v }: Params) => {
  const navigation = useNavigation();

  const openModal = (realEstate: RealEstate) => {
    //@ts-ignore
    navigation.navigate("ModalRe", { realEstate });
  };

  return (
    <TouchableOpacity onPress={() => openModal(v)}>
      <Image source={{ uri: v.url }} style={styles.img} />
    </TouchableOpacity>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
});
