import {TextInput } from "react-native";
import React from "react";
import Toast from "../../../global/components/toast";
import Error from "../../../global/components/error";
import { changePasswordSchema } from "../../login/validations/auth";
import { stylesLogin } from "../../login/login";
import { Formik } from "formik";
import { LoginJSX } from "../../sendCodeToEmail/components/login";
import { BtnForm } from "../../../global/components/btnForm";
import { fiveColor, tertiaryColor } from "../../../global/constants/colors/color";
import { ChangePassType } from "../interfaces/changePassType";

interface Params {
  handleSubmit: (values: ChangePassType) => Promise<void>;
  loading: boolean;
  msgPost: string;
}

const Form = ({ handleSubmit, loading, msgPost }: Params) => {
  return (
    <Formik
      validationSchema={changePasswordSchema}
      initialValues={{ email: "", code_recuperation: "", password: "" }}
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
            placeholder="Codigo"
            style={stylesLogin.input}
            onChangeText={handleChange("code_recuperation")}
            onBlur={handleBlur("code_recuperation")}
            value={values.code_recuperation}
          />

          <Error
            msg={errors.code_recuperation}
            touched={touched.code_recuperation}
            val={errors.code_recuperation}
          />

          <TextInput
            placeholder="Contraseña"
            style={stylesLogin.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />

          <Error
            msg={errors.password}
            touched={touched.password}
            val={errors.password}
          />

          {LoginJSX()}

          <BtnForm
            colorBtn={tertiaryColor}
            colorTxt={fiveColor}
            handleSubmit={handleSubmit}
            txt="Cambiar contraseña"
            loading={loading}
          />

          {msgPost && <Toast msg={msgPost} />}
        </>
      )}
    </Formik>
  );
};

export default Form;
