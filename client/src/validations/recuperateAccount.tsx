import { FormRecuperateAccount } from "../interface/formAuth";
import { validateEmail } from "jz-validation-form";
export const initialForm = {
  email: "",
  password: "",
  codeGmail:"",
};

export const validationsForm = (form: FormRecuperateAccount) => {
  let errors = {} as FormRecuperateAccount;

  const email = validateEmail(form.email);
  if (email) errors.email = email;

  return errors;
};
