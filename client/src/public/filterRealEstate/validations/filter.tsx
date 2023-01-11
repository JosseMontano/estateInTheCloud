import * as Yup from "yup";

const requiredText = "Este campo es obligatiorio";
const obligatedNumber = "Este campo es de tipo numero";

export const initialValues = {
  type: "Departamento",
  amountBathroom: "",
  amountBedroom: "",
  minPrice: "",
  maxPrice: "",
  minSquareMeter: "",
  maxSquareMeter: "",
};

const validationSchema = Yup.object({
  type: Yup.string(),
  amountBathroom: Yup.number()
    .required(requiredText)
    .typeError(obligatedNumber),
  amountBedroom: Yup.number().required(requiredText).typeError(obligatedNumber),
  minPrice: Yup.number().required(requiredText).typeError(obligatedNumber),
  maxPrice: Yup.number().required(requiredText).typeError(obligatedNumber),
  minSquareMeter: Yup.number()
    .required(requiredText)
    .typeError(obligatedNumber),
  maxSquareMeter: Yup.number()
    .required(requiredText)
    .typeError(obligatedNumber),
});

export default validationSchema;
