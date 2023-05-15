import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import Navbar from "../components/global/organisms/navbar";
import { secondaryColor } from "../constants/colors/color";
import { UseUser } from "../store/user";
import InforUser from "../components/profile/infoUser";

const Profile = () => {
  const { user } = UseUser();
  console.log(user.url_photo);
  return (
    <>
      <Navbar actual={"Profile"} />
      <ScrollView style={styles.container}>
        <InforUser user={user} />
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
  },
});
