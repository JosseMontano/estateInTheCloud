import { TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import { loginValidationSchema } from "../../validations/auth";
import Error from "../../components/global/atoms/error";
import Toast from "../../components/global/molecules/toast";
import { fiveColor, tertiaryColor } from "../../constants/colors/color";
import { BtnForm } from "../../components/global/atoms/btnForm";
import { styles } from "../../styles/login";
import { LoginFormValues } from "../../interfaces/auth/login";

interface Params {
  handleSubmit: (values: LoginFormValues) => void;
  recuperateAccountJSX: () => JSX.Element;
  msgPost: string;
}

const Form = ({ handleSubmit, msgPost, recuperateAccountJSX }: Params) => {
  return (
    <>
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

            {recuperateAccountJSX()}

            <BtnForm
              colorBtn={tertiaryColor}
              colorTxt={fiveColor}
              handleSubmit={handleSubmit}
              txt="Login"
            />

            {msgPost && <Toast msg={msgPost} />}
          </>
        )}
      </Formik>
    </>
  );
};


export default Form;
