import { FormRecuperateAccount } from "../interface/formAuth";
import { validateEmpty, validateEmail } from "jz-validation-form";
export const initialForm = {
  email: "",
  password: "",
  secrect_password: "",
};

export const validationsForm = (form: FormRecuperateAccount) => {
  let errors = {} as FormRecuperateAccount;

  const email = validateEmail(form.email);
  if (email) errors.email = email;

  const password = validateEmpty(form.password);
  if (password) errors.password = password;

  const secrect_password = validateEmpty(form.secrect_password);
  if (secrect_password) errors.secrect_password = secrect_password;

  return errors;
};
