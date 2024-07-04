import { TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import { SendEmailSchema } from "../index.validations";
import Error from "../../../global/components/error";
import { BtnForm } from "../../../global/components/btnForm";
import { fiveColor, tertiaryColor } from "../../../global/constants/colors/color";
import { stylesLogin } from "../../login/login";
import { LoginJSX } from "./login";
import Toast from "../../../global/components/toast";
import { SendCodeToEmailType } from "../interfaces/SendCodeToEmailType";

interface Params {
  handleSubmit: (values: SendCodeToEmailType) => Promise<void>;
  loading: boolean;
  msgPost: string;
}

const Form = ({ handleSubmit, loading, msgPost }: Params) => {
  return (
    <Formik
      validationSchema={SendEmailSchema}
      initialValues={{ email: "" }}
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

          {LoginJSX()}

          <BtnForm
            colorBtn={tertiaryColor}
            colorTxt={fiveColor}
            handleSubmit={handleSubmit}
            txt="Enviar codigo"
            loading={loading}
          />

          {msgPost && <Toast msg={msgPost} />}
        </>
      )}
    </Formik>
  );
};

export default Form;
