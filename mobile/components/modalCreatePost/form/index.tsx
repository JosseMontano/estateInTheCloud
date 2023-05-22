import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Error from "../../../components/global/atoms/error";
import { Formik } from "formik";
import { styles } from "../../../styles/login";
import { fiveColor, tertiaryColor } from "../../../constants/colors/color";
import Toast from "../../global/molecules/toast";
import { BtnForm } from "../../global/atoms/btnForm";
import { createPostValidationSchema } from "../../../validations/profile";
import { PostREI } from "../../../interfaces/profile/postRealEstate";

interface Params {
  handleSubmit: (values: PostREI) => Promise<void>;
  msgPost: string;
  loading: boolean;
}

const FormCreatePost = ({ handleSubmit, msgPost, loading }: Params) => {
  return (
    <View>
      <Formik
        validationSchema={createPostValidationSchema}
        initialValues={{
          title: "",
          description: "",
          type: "",
          amountBedrooms: "",
          Price: "",
          AmountBathrooms: "",
          SquareMeter: "",
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <>
            <TextInput
              placeholder="Titulo"
              style={styles.input}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />

            <Error
              msg={errors.title}
              touched={touched.title}
              val={errors.title}
            />

            <TextInput
              placeholder="Descripcion"
              style={styles.input}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
            />

            <Error
              msg={errors.description}
              touched={touched.description}
              val={errors.description}
            />

            <TextInput
              placeholder="Tipo Inmueble"
              style={styles.input}
              onChangeText={handleChange("type")}
              onBlur={handleBlur("type")}
              value={values.type}
            />

            <Error msg={errors.type} touched={touched.type} val={errors.type} />

            <TextInput
              placeholder="Cantidad de cuartos"
              style={styles.input}
              onChangeText={handleChange("amountBedrooms")}
              onBlur={handleBlur("amountBedrooms")}
              value={values.amountBedrooms}
            />

            <Error
              msg={errors.amountBedrooms}
              touched={touched.amountBedrooms}
              val={errors.amountBedrooms}
            />

            <TextInput
              placeholder="Precio"
              style={styles.input}
              onChangeText={handleChange("Price")}
              onBlur={handleBlur("Price")}
              value={values.Price}
            />

            <Error
              msg={errors.Price}
              touched={touched.Price}
              val={errors.Price}
            />

            <TextInput
              placeholder="Cantidad de baños"
              style={styles.input}
              onChangeText={handleChange("AmountBathrooms")}
              onBlur={handleBlur("AmountBathrooms")}
              value={values.AmountBathrooms}
            />

            <Error
              msg={errors.AmountBathrooms}
              touched={touched.AmountBathrooms}
              val={errors.AmountBathrooms}
            />

            <TextInput
              placeholder="Metros cuadrados"
              style={styles.input}
              onChangeText={handleChange("SquareMeter")}
              onBlur={handleBlur("SquareMeter")}
              value={values.SquareMeter}
            />

            <Error
              msg={errors.SquareMeter}
              touched={touched.SquareMeter}
              val={errors.SquareMeter}
            />

            <BtnForm
              colorBtn={tertiaryColor}
              colorTxt={fiveColor}
              handleSubmit={handleSubmit}
              txt={loading ? "Cargando..." : "Publicar"}
            />

            {msgPost && <Toast msg={msgPost} />}
          </>
        )}
      </Formik>
    </View>
  );
};

export default FormCreatePost;
