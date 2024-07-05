import { TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import { loginValidationSchema } from "../validations/auth";
import Error from "../../../global/components/error";
import Toast from "../../../global/components/toast";
import {
  fiveColor,
  tertiaryColor,
} from "../../../global/constants/colors/color";
import { BtnForm } from "../../../global/components/btnForm";
import { LoginFormValues } from "../interfaces/login";
import {
  styleInput,
  stylesShadow,
} from "../../../global/styles/global";

interface Params {
  handleSubmit: (values: LoginFormValues) => void;
  msgPost: string;
  loading: boolean;
}

const Form = ({ handleSubmit, msgPost, loading }: Params) => {
  return (
    <View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
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
            <View style={styles.content}>
              <TextInput
                placeholder="Email"
                style={[styleInput.input, stylesShadow]}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              <Error
                msg={errors.email}
                touched={touched.email}
                val={errors.email}
              />
            </View>

            <View style={styles.content}>
              <TextInput
                placeholder="Password"
                style={[styleInput.input, stylesShadow]}
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
            </View>

            <View style={styles.content}>
              <BtnForm
                colorBtn={tertiaryColor}
                colorTxt={fiveColor}
                handleSubmit={handleSubmit}
                txt="Login"
                loading={loading}
              />
            </View>

            {msgPost && <Toast msg={msgPost} />}
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export default Form;
