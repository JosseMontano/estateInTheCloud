import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { fiveColor } from "../../constants/colors/color";
import { Comments } from "../../interfaces/visitUser/comments";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Params {
  commentsState: Comments[];
}

const CommentsComponent = ({ commentsState }: Params) => {

  return (
    <View style={styles.containerComments}>
      <Text style={styles.title}>Comentarios</Text>

      {commentsState.map((v) => (
        <View style={styles.cardComment}>
          <Image source={{ uri: v.url_photo }} style={styles.image} />
          <View style={styles.content}>
            <Text>{v.email}</Text>
            <Text>{v.description}</Text>
            <Text>{v.amount_start}</Text>
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
  containerStarts: {
    display: "flex",
    flexDirection: "row",
  },
});
