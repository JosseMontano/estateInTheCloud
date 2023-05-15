import { StyleSheet, View, Image, Dimensions, ScrollView, Text } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { MyStackParamList } from "../App";
import ContainerContent from "../components/modalRe/containerContent";
import ContainerBtn from "../components/modalRe/containerBtn";
import CarouselImages from "../components/modalRe/carousel";
import Usefetch from "../hooks/usefetchParams";
import { RealEstatePhotos } from "../interfaces/modalRe/realEstat";
import { getRealEstatePhotos } from "../services/modalRe/realEstate";
import { useEffect, useState } from "react";
import { primaryColor } from "../constants/colors/color";
import { TouchableOpacity } from "react-native-gesture-handler";


type reactNav = StackScreenProps<MyStackParamList, "ModalRe">;

interface Params {}

const widthScreen = Dimensions.get("window").width;

const ModalRE = ({
  route,
  navigation,
}: StackScreenProps<MyStackParamList, "ModalRe">) => {
  const realEstate = route.params.realEstate;

  const handleRedirectHome = () => {
    navigation.navigate("Home");
  };

  const { data } = Usefetch<RealEstatePhotos>({
    services: getRealEstatePhotos,
    id: realEstate.id_real_estate,
  });

  return (
    <ScrollView style={styles.container}>
      <ContainerBtn handleRedirectHome={handleRedirectHome} />

      {data[0] != undefined && (
        <CarouselImages
          data={data[0].photos}
          width={widthScreen}
          height={150}
        />
      )}

      <ContainerContent realEstate={realEstate} />

    </ScrollView>
  );
};

export default ModalRE;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    flex: 1,
  },
});
