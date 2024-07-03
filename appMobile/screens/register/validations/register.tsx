import * as yup from "yup";
import {
  invalidGmail,
  required,
  minRequired,
  maxRequired,
} from "../../../global/constants/messages/validations";

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
