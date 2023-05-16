import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";

import { fiveColor, primaryColor } from "../constants/colors/color";
import Usefetch from "../hooks/usefetch";
import UsefetchParams from "../hooks/usefetchParams";
import {
  getRealEstateAll,
  getRealEstateForYou,
  getRealEstateMostRecent,
  getRealEstateRecommended,
} from "../services/home/realEstate";
import { RealEstate } from "../interfaces/home/realEstate";
import CarouselImages from "../components/home/carousel";
import { UseUser } from "../store/user";
import { useLinkTo } from "@react-navigation/native";

const widthScreen = Dimensions.get("window").width;

const Home = () => {
  const { user } = UseUser();

  const navigation = useLinkTo();

  if (user.id === 0) {
    navigation("/Login");
  }

  const { data: REAlll } = Usefetch<RealEstate>({
    services: getRealEstateAll,
  });

  const { data: REMostRecent } = Usefetch<RealEstate>({
    services: getRealEstateMostRecent,
  });

  const { data: RERecommendedUser } = Usefetch<RealEstate>({
    services: getRealEstateRecommended,
  });

  const { data: REForYou } = UsefetchParams<RealEstate>({
    services: getRealEstateForYou,
    id: user.id,
  });

  return (
    <ScrollView style={styles.container}>
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
          data={REForYou}
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
