import { FormLogin } from "../interface/formAuth";
import { validateEmail, validateEmpty } from "jz-validation-form";
export const initialForm = {
  email: "",
  password: "",
};

export const validationsForm = (form: FormLogin) => {
  let errors = {} as FormLogin;

  const email = validateEmail(form.email);
  if (email) errors.email = email;

  const password = validateEmpty(form.password);
  if (password) errors.password = password;

  return errors;
};
