import Answer from "../interface/answer";
import { validateEmpty } from "jz-validation-form";
export const initialForm = {
  answer: "",
  id_real_estate: 0,
  id_question: 0,
};

export const validationsForm = (form: Answer) => {
  let errors = {} as Answer;

  const answer = validateEmpty(form.answer);
  if (answer) errors.answer = answer;

  return errors;
};
