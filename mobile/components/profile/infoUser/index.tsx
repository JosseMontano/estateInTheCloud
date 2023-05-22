import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Pic from "./pic";
import ContainerBtn from "./containerBtn";
import Info from "./info";
import { UserType } from "../../../interfaces/global/user";

interface Params {
  user: UserType;
  handleRedirectCreate:()=>void;
}

const InforUser = ({ user, handleRedirectCreate }: Params) => {
  return (
    <View style={styles.containerContent}>
      <Pic user={user} />
      <ContainerBtn handleRedirectCreate={handleRedirectCreate} />
      <Info />
    </View>
  );
};

export default InforUser;

const styles = StyleSheet.create({
  containerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
});
