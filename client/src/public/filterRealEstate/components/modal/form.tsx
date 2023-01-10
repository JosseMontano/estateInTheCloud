import { useLanguage } from "@/global/context/languageContext";
import styled from "styled-components";
import { Button } from "jz-validation-form";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { RealEstateFilterCustom } from "../../interfaces/filterCustom";
import TextInput from "./textInput";
import { ColorBtn } from "@/global/styles/globals";

const ChildSty = styled.div`
  margin-top: 10px;
`;


interface Params {
  searchCustom: (form: RealEstateFilterCustom) => void;
}

const FormComponent = ({ searchCustom }: Params) => {
  const { text } = useLanguage();
  const requiredText = "Este campo es obligatiorio";
  const obligatedNumber = "Este campo es de tipo numero";
  return (
    <ChildSty>
      <Formik
        validateOnChange={false}
        initialValues={{
          type: "Departamento",
          amountBathroom: "",
          amountBedroom: "",
          minPrice: "",
          maxPrice: "",
          minSquareMeter: "",
          maxSquareMeter: "",
        }}
        validationSchema={Yup.object({
          type: Yup.string(),
          amountBathroom: Yup.number()
            .required(requiredText)
            .typeError(obligatedNumber),
          amountBedroom: Yup.number()
            .required(requiredText)
            .typeError(obligatedNumber),
          minPrice: Yup.number()
            .required(requiredText)
            .typeError(obligatedNumber),
          maxPrice: Yup.number()
            .required(requiredText)
            .typeError(obligatedNumber),
          minSquareMeter: Yup.number()
            .required(requiredText)
            .typeError(obligatedNumber),
          maxSquareMeter: Yup.number()
            .required(requiredText)
            .typeError(obligatedNumber),
        })}
        onSubmit={(values) => {
          searchCustom(values);
        }}
      >
        <Form>
          <TextInput
            label={text.filterBedroom}
            name="amountBedroom"
            placeholder="3"
          />

          <TextInput
            label={text.filterCustomPrice}
            name="minPrice"
            placeholder="700"
          />

          <TextInput
            label={text.filterCustomPrice}
            name="maxPrice"
            placeholder="1000"
          />

          <TextInput
            label={text.filterCustomBathroom}
            name="amountBathroom"
            placeholder="2"
          />

          <TextInput
            label={text.filterCustomSize}
            name="minSquareMeter"
            placeholder="25"
          />

          <TextInput
            label={text.filterCustomSize}
            name="maxSquareMeter"
            placeholder="40"
          />
          <Button type="submit" ColorBtn={ColorBtn}>
            Buscar
          </Button>
        </Form>
      </Formik>
    </ChildSty>
  );
};

export default FormComponent;
