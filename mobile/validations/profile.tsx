import * as yup from "yup";
import { minRequired, required } from "../constants/messages/validations";

export const createPostValidationSchema = yup.object().shape({
  title: yup.string().required(required),
  description: yup.string().min(6, minRequired(6)).required(required),
  type: yup.string().required(required),
  amountBedrooms: yup.string().required(required),
  Price: yup.string().required(required),
  AmountBathrooms: yup.string().required(required),
  SquareMeter: yup.string().required(required),
});
