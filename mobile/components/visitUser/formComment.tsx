import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { UseUser } from "../../store/user";
import Icon from "react-native-vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";
import { Formik } from "formik";
import { validationSchemaComments } from "../../validations/visitUser";
import { fiveColor, tertiaryColor } from "../../constants/colors/color";
import { styles as stylesForm } from "../../styles/login";
import { btnStyle, btnTxtStyle } from "../../constants/colors/btn";
import { CommentsPostType } from "../../interfaces/visitUser/comments";

interface Params {
  userVisited: number;
  addComment: (form: CommentsPostType) => Promise<void>;
}

const FormComment = ({ userVisited, addComment }: Params) => {
  const { user } = UseUser();

  const [rating, setRating] = useState(0);

  const onStarRatingPress = (rating: number) => {
    setRating(rating);
  };

  // ======== FORM =======

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { description: string }) => {
    setLoading(true);

    const newComment: CommentsPostType = {
      amountStart: rating,
      description: values.description,
      id_user_commentator: user.id,
      id_user_visited: userVisited,
    };

    await addComment(newComment);

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={{ uri: user.url_photo }} style={styles.image} />
      </View>

      <View style={styles.containerForm}>
        <Formik
          initialValues={{ description: "" }}
          validationSchema={validationSchemaComments}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View style={styles.containerTextInput}>
              <TextInput
                style={stylesForm.input}
                onChangeText={handleChange("description")}
                value={values.description}
                placeholder="Comentario"
              />
              {errors.description && (
                <Text style={stylesForm.error}>{errors.description}</Text>
              )}

              <TouchableOpacity
                style={btnStyle(tertiaryColor, false)}
                onPress={() => handleSubmit()}
              >
                <Text style={btnTxtStyle(fiveColor)}>
                  {loading ? "Cargando..." : "Login"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          fullStarColor="gold"
          emptyStarColor="gray"
          selectedStar={(rating) => onStarRatingPress(rating)}
          starSize={40}
          iconSet="FontAwesome"
          starStyle={{ marginHorizontal: 5 }}
        />
      </View>
    </View>
  );
};

export default FormComment;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  containerImg: {
    alignSelf: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 15,
  },
  containerForm: {
    padding: 10,
    display: "flex",
    gap: 10,
  },
  containerTextInput: {
    width: 200,
    alignSelf: "center",
  },
});
