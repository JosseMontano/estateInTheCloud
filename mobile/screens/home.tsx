import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/global/organisms/navbar";
import { primaryColor } from "../constants/colors/color";

const Home = () => {
  return (
    <>
      <Navbar actual={"Home"} />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    flex: 1,
  },
});
