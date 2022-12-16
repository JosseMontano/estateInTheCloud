import { FormComment } from "../interface/formComment";
import { validateEmpty } from "jz-validation-form";
export const initialForm = {
  description: "",
  commentator: 0,
  person_commented: 0,
  amount_start: 0,
};

export const validationsForm = (form: FormComment) => {
  let errors = {} as FormComment;

  const description = validateEmpty(form.description);
  if (description) errors.description = description;

  return errors;
};
