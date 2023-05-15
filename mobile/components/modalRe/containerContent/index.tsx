import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  fiveColor,
  primaryColor,
  sixColor,
} from "../../../constants/colors/color";
import { RealEstate } from "../../../interfaces/home/realEstate";

interface Params {
  realEstate: RealEstate;
}

const ContainerContent = ({ realEstate }: Params) => {
  return (
    <View style={styles.containerContent}>
      <Text style={styles.title}>{realEstate.title}</Text>
      <Text style={styles.description}>{realEstate.description}</Text>
      <Text style={styles.subtitle}>Ubicacion: </Text>
      <Text style={styles.subdescription}>{realEstate.address}</Text>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Cantidad de baños: </Text>
        <Text style={styles.subdescription}>{realEstate.amount_bathroom}</Text>
      </View>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Cantidad de cuartos: </Text>
        <Text style={styles.subdescription}>{realEstate.amount_bedroom}</Text>
      </View>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Precio: </Text>
        <Text style={styles.subdescription}>{realEstate.price}Bs</Text>
      </View>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Metros: </Text>
        <Text style={styles.subdescription}>
          {realEstate.square_meter} metros cuadrados
        </Text>
      </View>
    </View>
  );
};

export default ContainerContent;

const styles = StyleSheet.create({
  containerContent: {
    padding: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: fiveColor,
  },
  description: {
    fontSize: 16,
    color: fiveColor,
  },
  containerSubtitle: {
    display: "flex",
    flexDirection: "row",
    color: fiveColor,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: fiveColor,
  },
  subdescription: {
    color: fiveColor,
  },
});
