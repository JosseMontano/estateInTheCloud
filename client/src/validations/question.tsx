import Question from "../interface/question";
import { validateEmpty } from "jz-validation-form";
export const initialForm = {
  question: "",
};

export const validationsForm = (form: Question) => {
  let errors = {} as Question;

  const question = validateEmpty(form.question);
  if (question) errors.question = question;

  return errors;
};
