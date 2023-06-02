import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { UserType } from "../../interfaces/global/user";
import { fiveColor } from "../../constants/colors/color";

interface Params {
  user: UserType;
}

const Profile = ({ user }: Params) => {
  return (
    <View style={styles.containerProfile}>
      <Image source={{ uri: user.url_photo }} style={styles.image} />
      <Text style={styles.title}>{user.email}</Text>
      <Text style={styles.subTitle}>{user.user_name}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerProfile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    borderBottomColor: fiveColor,
    borderWidth: 1,
    paddingBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    color: fiveColor,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    color: fiveColor,
  },
});
