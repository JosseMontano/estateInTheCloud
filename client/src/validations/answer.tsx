import Answer from "../interface/answer";

export const initialForm = {
  answer: "",
  id_real_estate: 0,
  id_question: 0,
};

export const validationsForm = (form: Answer) => {
  let errors = {} as Answer;
  if (!form.answer.trim()) {
    errors.answer = "El campo 'Respuesta' es requerido";
  }

  return errors;
};
