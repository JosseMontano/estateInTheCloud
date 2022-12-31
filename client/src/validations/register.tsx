import { FormRegister } from "../interfaces/formAuth";
import {
  validateEmail,
  validateNumber,
  validateEmpty,
} from "jz-validation-form";
export const initialForm = {
  email: "",
  username: "",
  numberPhone: "",
  password: "",
};

export const validationsForm = (form: FormRegister) => {
  let errors = {} as FormRegister;

  const numberPhone = validateNumber(form.numberPhone);
  if (numberPhone) errors.numberPhone = numberPhone;

  const email = validateEmail(form.email);
  if (email) errors.email = email;

  const username = validateEmpty(form.username);
  if (username) errors.username = username;

  const password = validateEmpty(form.password);
  if (password) errors.password = password;

  return errors;
};
