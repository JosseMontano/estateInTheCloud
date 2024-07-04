import * as yup from "yup";
import {
  invalidGmail,
  required,
} from "../../global/constants/messages/validations";

export const SendEmailSchema = yup.object().shape({
  email: yup.string().email(invalidGmail).required(required),
});
