import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import Navbar from "../components/global/organisms/navbar";
import { fiveColor, primaryColor } from "../constants/colors/color";
import Usefetch from "../hooks/usefetch";
import {
  getRealEstateAll,
  getRealEstateMostRecent,
  getRealEstateRecommended,
} from "../services/home/realEstate";
import { RealEstate } from "../interfaces/home/realEstate";
import CarouselImages from "../components/home/carousel";

const widthScreen = Dimensions.get("window").width;

const Home = () => {
  const { data: REAlll } = Usefetch<RealEstate>({
    services: getRealEstateAll,
  });

  const { data: REMostRecent } = Usefetch<RealEstate>({
    services: getRealEstateMostRecent,
  });

  const { data: RERecommendedUser } = Usefetch<RealEstate>({
    services: getRealEstateRecommended,
  });

  return (
    <ScrollView style={styles.container}>
      <Navbar actual={"Home"} />
      <View>
        <Text style={styles.subtitle}>Mas recientes</Text>
        <CarouselImages data={REMostRecent} width={widthScreen} height={250} />

        <Text style={styles.subtitle}>Todos</Text>
        <CarouselImages data={REAlll} width={widthScreen} height={250} />

        <Text style={styles.subtitle}>Propietarios recomendados</Text>
        <CarouselImages
          data={RERecommendedUser}
          width={widthScreen}
          height={250}
        />

        <Text style={styles.subtitle}>Para ti</Text>
        <CarouselImages
          data={RERecommendedUser}
          width={widthScreen}
          height={250}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
  },
  subtitle: {
    fontSize: 24,
    color: fiveColor,
    fontWeight: "bold",
  },
});
