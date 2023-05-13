import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { MyStackParamList } from "../App";
import { fiveColor } from "../constants/colors/color";
import { sixColor } from "../constants/colors/color";
import ContainerContent from "../components/modalRe/containerContent";
import ContainerBtn from "../components/modalRe/containerBtn";

type reactNav = StackScreenProps<MyStackParamList, "ModalRe">;

interface Params {
  reactNav: reactNav;
}

const ModalRE = ({
  route,
  navigation,
}: StackScreenProps<MyStackParamList, "ModalRe">) => {
  const realEstate = route.params.realEstate;

  const handleRedirectHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ContainerBtn handleRedirectHome={handleRedirectHome} />
      <Image source={{ uri: realEstate.url }} style={styles.image} />
      <ContainerContent realEstate={realEstate} />
    </View>
  );
};

export default ModalRE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "50%",
    width: "100%",
  },
});
