import { StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import Navbar from "../components/global/organisms/navbar";
import { secondaryColor } from "../constants/colors/color";
import { UseUser } from "../store/user";
import InforUser from "../components/profile/infoUser";
import { useQuery } from "@apollo/client";
import { getREByProfile } from "../services/profile/realEstate";
import InfoPost from "../components/profile/infoPost";

const Profile = () => {
  const { user } = UseUser();

  //get the realEstate  with graphql
  const { data, loading, refetch } = useQuery(getREByProfile, {
    variables: { idUser: user.id },
  });

  useEffect(() => {
    const getRealEstate = (id: any) => {
      refetch({
        idUser: id,
      });
    };

    if (user.id) {
      getRealEstate(user.id);
    }
  }, [user.id]);

  return (
    <>
      <Navbar actual={"Profile"} />
      <ScrollView style={styles.container}>
        <InforUser user={user} />
        {!loading && data.GET_REAL_ESTATE_BY_ID_USER.length > 0 && (
          <InfoPost data={data.GET_REAL_ESTATE_BY_ID_USER} />
        )}
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
