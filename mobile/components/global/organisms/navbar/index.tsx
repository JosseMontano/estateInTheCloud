import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { secondaryColor } from "../../../../constants/colors/color";
import Icon from "./icon";
import { deleteCookie } from "../../../../utils/cookie";

type Route = "Home" | "Profile";

interface Params {
  actual: Route;
}

const Navbar = ({ actual }: Params) => {
  const dataJSX = [
    {
      icon: FontAwesome5,
      name: "home",
      route: "Home",
    },
    {
      icon: Entypo,
      name: "user",
      route: "Profile",
    },
    {
      icon: FontAwesome5,
      name: "search",
      route: "Search",
    },
    {
      icon: MaterialCommunityIcons,
      name: "nut",
      route: "Config",
    },
    {
      icon: AntDesign,
      name: "logout",
      route: "Login",
      eventPress: () => deleteCookie("token"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containerIcons}>
        {dataJSX.map((v) => (
          <Icon v={v} actual={actual} />
        ))}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {},
  containerIcons: {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: secondaryColor,
    padding: 10,
  },
});
