import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/global/organisms/navbar";

const Profile = () => {
  return (
    <>
      <Navbar actual={"Profile"} />
      <View>
        <Text>Profile</Text>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
