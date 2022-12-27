import { FormRecuperateAccount } from "../interface/formAuth";
import { validateEmpty, validateEmail } from "jz-validation-form";
export const initialForm = {
  email: "",
  subject: "",
};

export const validationsForm = (form: FormRecuperateAccount) => {
  let errors = {} as FormRecuperateAccount;

  const email = validateEmail(form.email);
  if (email) errors.email = email;

  const subject = validateEmpty(form.subject);
  if (subject) errors.subject = subject;


  return errors;
};
