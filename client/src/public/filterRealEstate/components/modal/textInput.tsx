import { useField, ErrorMessage } from "formik";
import { Label, Input } from "jz-validation-form";
import styled from "styled-components";

const ConAux = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin: 0px 5px;
  }
`;

interface Params {
  label: string;
  name: string;
  placeholder?: string;
}

const TextInput = ({ label, ...props }: Params) => {
  const [field] = useField(props);
  return (
    <>
      <Label>{label}</Label>
      <ConAux>
        <Input {...field} {...props} />
        <ErrorMessage name={props.name} component="span" className="msgError" />
      </ConAux>
    </>
  );
};

export default TextInput;
