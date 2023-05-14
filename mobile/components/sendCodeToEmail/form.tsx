import { TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import { SendEmailSchema } from "../../validations/auth";
import Error from "../global/atoms/error";
import { BtnForm } from "../global/atoms/btnForm";
import { fiveColor, tertiaryColor } from "../../constants/colors/color";
import { styles } from "../../styles/login";
import { LoginJSX } from "./login";
import Toast from "../global/molecules/toast";
import { SendCodeToEmailType } from "../../interfaces/auth/SendCodeToEmailType";

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
