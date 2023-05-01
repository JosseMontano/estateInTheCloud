import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Formik } from "formik";
import { fiveColor, tertiaryColor } from "../constants/colors/color";
import { btnStyle, btnTxtStyle } from "../constants/colors/btn";
import { styles } from "../styles/login";
import { loginValidationSchema } from "../validations/login";
import Error from "../components/atoms/error";

import Toast from "../components/molecules/toast";
import { useHandleSubmit } from "../hooks/login/useHandleSubmit";

const Login = () => {
  const { handleSubmit, msgPost } = useHandleSubmit();

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
            <TouchableOpacity
              style={btnStyle(tertiaryColor)}
              onPress={() => handleSubmit()}
            >
              <Text style={btnTxtStyle(fiveColor)}>Login</Text>
            </TouchableOpacity>
            {msgPost && <Toast msg={msgPost} />}
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
