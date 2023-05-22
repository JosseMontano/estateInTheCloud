import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { primaryColor } from "../constants/colors/color";
import ContainerBtn from "../components/modalCreatePost/containerBtn";
import { useLinkTo } from "@react-navigation/native";
import FormCreatePost from "../components/modalCreatePost/form";
import { PostREI } from "../interfaces/profile/postRealEstate";
import { saveRealEstate } from "../services/profile/realEstate";
import { useHandleSubmit } from "../hooks/profile/useHandleSubmit";

const ModalCreatePublication = () => {
  const navigation = useLinkTo();

  //redirect to profile
  const handleRedirectProfile = () => {
    navigation("/Profile");
  };

  //form
  const { handleSubmit, loading, msgPost } = useHandleSubmit<PostREI>({
    service: saveRealEstate,
  });

  return (
    <View style={styles.container}>
      <ContainerBtn handleRedirectHome={handleRedirectProfile} />
      <Text>Crear publicacion</Text>
      <FormCreatePost
        handleSubmit={handleSubmit}
        msgPost={msgPost}
        loading={loading}
      />
    </View>
  );
};

export default ModalCreatePublication;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    flex: 1,
  },
});
