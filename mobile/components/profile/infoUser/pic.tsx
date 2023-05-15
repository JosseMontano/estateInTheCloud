import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import { UserType } from "../../../interfaces/global/user";

interface Params {
  user: UserType;
}

const Pic = ({ user }: Params) => {
  return (
    <>
      <Image source={{ uri: user.url_photo }} style={styles.image} />
      <Text style={styles.email}>{user.email}</Text>
    </>
  );
};

export default Pic;

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    height: 200,
    width: 200,
  },
  email: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
  },
});
