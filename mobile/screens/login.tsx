import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import {
  fiveColor,
  primaryColor,
  sixColor,
  tertiaryColor,
} from "../constants/color";
import { inputStyle } from "../constants/input";
import { btnStyle, btnTxtStyle } from "../constants/btn";

interface LoginFormValues {
  email: string;
  password: string;
}

const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const Login = () => {
  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
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
        }: FormikProps<LoginFormValues>) => (
          <>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={btnStyle(tertiaryColor)}
              onPress={() => handleSubmit()}
            >
              <Text style={btnTxtStyle(fiveColor)}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
  },
  input: inputStyle,
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Login;
