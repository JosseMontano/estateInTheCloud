import Question from "../interface/question";

export const initialForm = {
  question: "",
};

export const validationsForm = (form: Question) => {
  let errors = {} as Question;
  if (!form.question.trim()) {
    errors.question = "El campo 'Pregunta' es requerido";
  }
  return errors;
};
