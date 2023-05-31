import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { primaryColor } from "../constants/colors/color";
import ContainerBtn from "../components/modalCreatePost/containerBtn";
import { useLinkTo } from "@react-navigation/native";
import FormCreatePost from "../components/modalCreatePost/form";
import { PostREI } from "../interfaces/profile/postRealEstate";
import {
  getRealEstateType,
  saveRealEstate,
} from "../services/profile/realEstate";
import { useHandleSubmit } from "../hooks/profile/useHandleSubmit";
import { UseUser } from "../store/user";
import * as ImagePicker from "expo-image-picker";
import Usefetch from "../hooks/usefetch";
import { TypeREType } from "../interfaces/profile/typeRealEstate";

const ModalCreatePublication = () => {
  const navigation = useLinkTo();
  const { user } = UseUser();

  // ============= redirect to profile =============
  const handleRedirectProfile = () => {
    navigation("/Profile");
  };

  // ============= form =============
  const { handleSubmit, loading, msgPost } = useHandleSubmit<PostREI>({
    service: saveRealEstate,
  });

  // ============= get type real estate =============

  const { data: typesRE } = Usefetch<TypeREType>({
    services: getRealEstateType,
  });

  const [typeREState, setTypeREState] = useState(6);

  const handleLoadTypeRE = (val: number) => {
    setTypeREState(val);
    console.log(val);
  };

  // ============= getImage =============
  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]?.uri);
    }
  };

  const addImageToForm = async (val: PostREI) => {
    const valWithImg = {
      url: image,
      id_user: user.id,
      ...val,
    };
    await handleSubmit(valWithImg);
  };

  return (
    <View style={styles.container}>
      <ContainerBtn handleRedirectHome={handleRedirectProfile} />
      <Text>Crear publicacion</Text>
      <FormCreatePost
        handleSubmit={addImageToForm}
        msgPost={msgPost}
        loading={loading}
        pickImage={pickImage}
        image={image}
        typesRE={typesRE}
        handleLoadTypeRE={handleLoadTypeRE}
        typeREState={typeREState}
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
