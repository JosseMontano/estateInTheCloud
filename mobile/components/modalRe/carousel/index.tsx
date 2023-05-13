import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { RealEstatePhoto } from "../../../interfaces/modalRe/realEstat";

interface Params {
  data: RealEstatePhoto[];
  height: number;
  width: number;
}

const CarouselImages = ({ data, height, width }: Params) => {
  const renderItem = ({ item }: { item: RealEstatePhoto }) => {
    return (
      <View key={item.id}>
        <Image style={styles.img} source={{ uri: item.url }} />
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
  img: {
    marginTop: 10,
    width: "100%",
    height: 350,
  },
});
