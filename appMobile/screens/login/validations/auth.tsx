import * as yup from "yup";
import {
  invalidGmail,
  maxRequired,
  minRequired,
  required,
} from "../../../global/constants/messages/validations";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email(invalidGmail).required(required),
  password: yup.string().min(6, minRequired(6)).required(required),
});

export const signUpValidationSchema = yup.object().shape({
  email: yup.string().email(invalidGmail).required(required),
  password: yup.string().min(6, minRequired(6)).required(required),
  username: yup.string().min(3).required(required),
  cellphone_number: yup
    .string()
    .min(11, minRequired(11))
    .max(11, maxRequired(11))
    .required(required),
});

export const SendEmailSchema = yup.object().shape({
  email: yup.string().email(invalidGmail).required(required),
});

export const changePasswordSchema = yup.object().shape({
  email: yup.string().email(invalidGmail).required(required),
  code_recuperation: yup.string().min(4, minRequired(4)).required(required),
  password: yup.string().min(6, minRequired(6)).required(required),
});
