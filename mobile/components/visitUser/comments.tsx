import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  fiveColor,
  fourtyColor,
  tertiaryColor,
} from "../../constants/colors/color";
import { Comments } from "../../interfaces/visitUser/comments";
import Ionicons from "react-native-vector-icons/Ionicons";
import { UseUser } from "../../store/user";

interface Params {
  commentsState: Comments[];
  handleDelete: (id: number) => Promise<void>;
}

const CommentsComponent = ({ commentsState, handleDelete }: Params) => {
  const { user } = UseUser();

  return (
    <View style={styles.containerComments}>
      <Text style={styles.title}>Comentarios</Text>

      {commentsState.map((v) => (
        <View style={styles.cardComment}>
          <Image source={{ uri: v.url_photo }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.email}>{v.email}</Text>
            <Text style={styles.description}>{v.description}</Text>
            {/* ======== STARTS  ========*/}

            <View style={styles.containerStarts}>
              {Array.from({ length: v.amount_start }, (_, index) => (
                <Ionicons
                  name="ios-star"
                  size={20}
                  color={"#f5e048"}
                  key={index}
                />
              ))}
            </View>

            {/* ======== BTN DELETE  ========*/}
            {user.id == v.commentator && (
              <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => handleDelete(v.id_comment)}
              >
                <Text style={styles.txtBtn}>Eliminar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default CommentsComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: fiveColor,
    fontWeight: "bold",
  },
  containerComments: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 7,
  },
  cardComment: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  content: {
    padding: 10,
  },
  email: {
    fontSize: 15,
    color: fiveColor,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: fiveColor,
  },
  containerStarts: {
    display: "flex",
    flexDirection: "row",
  },
  btnDelete: {
    backgroundColor: fourtyColor,
    width: 80,
    borderRadius: 10,
    marginTop: 5,
  },
  txtBtn: {
    color: fiveColor,
    textAlign: "center",
    fontWeight: "bold",
  },
});
