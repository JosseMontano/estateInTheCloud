import { TextInput } from "react-native";
import React from "react";
import Error from "../../../global/components/error";
import { Formik } from "formik";
import { signUpValidationSchema } from "../validations/register";
import { SignUpType } from "../interfaces/register";
import { stylesLogin } from "../../login/login";
import { fiveColor, tertiaryColor } from "../../../global/constants/colors/color";
import Toast from "../../../global/components/toast";
import { BtnForm } from "../../../global/components/btnForm";

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
              placeholder="Nombre de usuario"
              style={stylesLogin.input}
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
              style={stylesLogin.input}
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
