import { StyleSheet, TextInput } from "react-native";
import React from "react";
import Error from "../../components/global/atoms/error";
import { Formik } from "formik";
import { signUpValidationSchema } from "../../validations/auth";
import { SignUpType } from "../../interfaces/auth/register";
import { styles } from "../../styles/login";
import { fiveColor, tertiaryColor } from "../../constants/colors/color";
import Toast from "../global/molecules/toast";
import { BtnForm } from "../global/atoms/btnForm";

interface Params {
  handleSubmit: (values: SignUpType) => void;
  recuperateAccountJSX: () => JSX.Element;
  msgPost: string;
}

const Form = ({ handleSubmit, msgPost, recuperateAccountJSX }: Params) => {
  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          email: "",
          password: "",
          cellphone_number: "",
          username: "",
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
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />

            <Error
              msg={errors.email}
              touched={touched.email}
              val={errors.email}
            />

            <TextInput
              placeholder="Nombre de usuario"
              style={styles.input}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />

            <Error
              msg={errors.username}
              touched={touched.username}
              val={errors.username}
            />

            <TextInput
              placeholder="Numero de celular"
              style={styles.input}
              onChangeText={handleChange("cellphone_number")}
              onBlur={handleBlur("cellphone_number")}
              value={values.cellphone_number}
            />

            <Error
              msg={errors.cellphone_number}
              touched={touched.cellphone_number}
              val={errors.cellphone_number}
            />

            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />

            <Error
              msg={errors.password}
              touched={touched.password}
              val={errors.password}
            />

            {recuperateAccountJSX()}

            <BtnForm
              colorBtn={tertiaryColor}
              colorTxt={fiveColor}
              handleSubmit={handleSubmit}
              txt="Crear cuenta"
            />

            {msgPost && <Toast msg={msgPost} />}
          </>
        )}
      </Formik>
    </>
  );
};

export default Form;
