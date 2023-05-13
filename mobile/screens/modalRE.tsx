import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { MyStackParamList } from "../App";
import { fiveColor } from "../constants/colors/color";
import { sixColor } from "../constants/colors/color";

type reactNav = StackScreenProps<MyStackParamList, "ModalRe">;

interface Params {
  reactNav: reactNav;
}

const ModalRE = ({
  route,
  navigation,
}: StackScreenProps<MyStackParamList, "ModalRe">) => {
  const realEstate = route.params.realEstate;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnBack} onPress={() => {}}>
        <Text style={styles.btnText}>{"<"}</Text>
      </TouchableOpacity>

      <Image source={{ uri: realEstate.url }} style={styles.image} />
      <Text>{realEstate.address}</Text>
    </View>
  );
};

export default ModalRE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnBack: {
  
    width: 30,
    position: "absolute",
    zIndex: 2,
  },
  btnText: {
    textAlign:"center",
    fontSize: 32,
    color: sixColor,
  },
  image: {
    height: "50%",
    width: "100%",
  },
});
