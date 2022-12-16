import { FormComment } from "../interface/formComment";

export const initialForm = {
  description: "",
  commentator: 0,
  person_commented: 0,
  amount_start:0,
};

export const validationsForm = (form: FormComment) => {
  let errors = {} as FormComment;
  if (!form.description.trim()) {
    errors.description = "El campo 'Descripcion' es requerido";
  }
  return errors;
};
