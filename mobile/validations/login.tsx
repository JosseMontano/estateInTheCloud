import * as yup from "yup";
import {
  invalidGmail,
  minRequired,
  required,
} from "../constants/messages/validations";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email(invalidGmail).required(required),
  password: yup.string().min(6, minRequired(6)).required(required),
});
