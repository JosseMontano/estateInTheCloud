import * as Yup from "yup";

export const validationSchemaComments = Yup.object().shape({
  description: Yup.string().required("La descripción es requerida"),
});
