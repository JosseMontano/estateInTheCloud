import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Error from "../../../components/global/atoms/error";
import { Formik } from "formik";
import { styles } from "../../../styles/login";
import { fiveColor, tertiaryColor } from "../../../constants/colors/color";
import Toast from "../../global/molecules/toast";
import { BtnForm } from "../../global/atoms/btnForm";
import { createPostValidationSchema } from "../../../validations/profile";
import { PostREI } from "../../../interfaces/profile/postRealEstate";
import { fourtyColor } from "../../../constants/colors/color";
import { TypeREType } from "../../../interfaces/profile/typeRealEstate";


interface Params {
  handleSubmit: (values: PostREI) => void;
  msgPost: string;
  loading: boolean;
  pickImage: () => void;
  image: string;
  typesRE: TypeREType[];
  handleLoadTypeRE: (val: number) => void;
  typeREState:number
}

const FormCreatePost = ({
  handleSubmit,
  msgPost,
  loading,
  pickImage,
  image,
  typesRE,
  handleLoadTypeRE,
  typeREState
}: Params) => {
  return (
    <View style={stylesComponent.container}>
      <ScrollView>
        <Text style={stylesComponent.title}>Publicar inmueble</Text>
        <Formik
          validationSchema={createPostValidationSchema}
          initialValues={{
            title: "",
            description: "",
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

              {/*   
                <SelectDropdown
                  data={typesRE}
                  onSelect={(selectedItem, index) => {
                    //handleLoadTypeRE(selectedItem);
                    console.log(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                /> */}

      

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

              <TouchableOpacity onPress={pickImage} style={stylesComponent.btn}>
                <Text style={stylesComponent.btnText}>Seleccionar archivo</Text>
              </TouchableOpacity>

              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}

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
      </ScrollView>
    </View>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: fiveColor,
  },
  btn: {
    backgroundColor: fourtyColor,
    width: 100,
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: fiveColor,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default FormCreatePost;
