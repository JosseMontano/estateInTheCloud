import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { RealEstate } from "../../../interfaces/home/realEstate";
import {
  fiveColor,
  secondaryColor,
  tertiaryColor,
} from "../../../constants/colors/color";

interface Params {
  data: RealEstate[];
  height: number;
  width: number;
}

const CarouselImages = ({ data, height, width }: Params) => {
  const renderItem = ({ item }: { item: RealEstate }) => {
    return (
      <View key={item.id_real_estate} style={styles.card}>
        <Image style={styles.img} source={{ uri: item.url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.user}>{item.email}</Text>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text>Mas info</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text>Visitar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.colorBtn}>🤍</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      layout={"default"}
      sliderWidth={width}
      itemWidth={width / 2}
      itemHeight={height}
    />
  );
};

export default CarouselImages;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: secondaryColor,
    height: 350,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    color: fiveColor,
    fontWeight: "bold",
  },
  user: {
    fontSize: 16,
    color: fiveColor,
  },
  img: {
    width: 200,
    height: 200,
  },
  containerBtn: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gap: 10,
  },
  btn: {
    backgroundColor: tertiaryColor,
    padding: 5,
    borderRadius: 5,
  },
  colorBtn:{
    color:fiveColor,
  }
});
