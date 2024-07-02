import { TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import { loginValidationSchema } from "../validations/auth";
import Error from "../../../global/components/error";
import Toast from "../../../global/components/toast";
import { fiveColor, tertiaryColor } from "../../../global/constants/colors/color";
import { BtnForm } from "../../../global/components/btnForm";
import { LoginFormValues } from "../interfaces/login";
import { stylesLogin } from "../login";

interface Params {
  handleSubmit: (values: LoginFormValues) => void;
  recuperateAccountJSX: () => JSX.Element;
  msgPost: string;
  loading: boolean;
}

const Form = ({ handleSubmit, msgPost, recuperateAccountJSX, loading }: Params) => {
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
              style={stylesLogin.input}
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
              style={stylesLogin.input}
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
              loading={loading}
            />

            {msgPost && <Toast msg={msgPost} />}
          </>
        )}
      </Formik>
    </>
  );
};


export default Form;
