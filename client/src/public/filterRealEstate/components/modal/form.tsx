import { useLanguage } from "@/global/context/languageContext";
import styled from "styled-components";
import { Button } from "jz-validation-form";
import { Form, Formik } from "formik";
import { RealEstateFilterCustom } from "../../interfaces/filterCustom";
import TextInput from "./textInput";
import { ColorBtn } from "@/global/styles/globals";
import validationSchema, { initialValues } from "../../validations/filter";

const ChildSty = styled.div`
  margin-top: 10px;
`;

interface Params {
  searchCustom: (form: RealEstateFilterCustom) => void;
}

const FormComponent = ({ searchCustom }: Params) => {
  const { text } = useLanguage();

  return (
    <ChildSty>
      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
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
