import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { sixColor } from "../../../constants/colors/color";
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
      <Text>{realEstate.address}</Text>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Cantidad de baños: </Text>
        <Text>{realEstate.amount_bathroom}</Text>
      </View>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Cantidad de cuartos: </Text>
        <Text>{realEstate.amount_bedroom}</Text>
      </View>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Precio: </Text>
        <Text>{realEstate.price}Bs</Text>
      </View>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Metros: </Text>
        <Text>{realEstate.square_meter} metros cuadrados</Text>
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
  },
  description: {
    fontSize: 16,
  },
  containerSubtitle: {
    display: "flex",
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
