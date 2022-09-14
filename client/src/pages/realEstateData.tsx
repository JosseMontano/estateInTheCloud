import { ToastContext } from "../context/toast";
import {
  ColorBtn,
  Input,
  Label,
  ColorText,
  ErrorCss,
  Button,
  TextArea
} from "../styles/globals";
import { initialForm, validationsForm } from "../validations/realEstateData";
import { UseForm } from "../hooks/form/useFormRealEstateData";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/loader";
import Message from "../components/message";
import { NameUserContext } from "../context/nameUser";
import { RealEstate } from "../interface/realEstateData";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
`;

const Index = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validationsForm);
  const { toast } = useContext(ToastContext);

  const { idUser } = useContext(NameUserContext);

  const navigate = useNavigate();

  const sendData = (received: RealEstate) => {
    received.idUser = idUser;
    handleSubmit();
  };

  return (
    <Container>
      <Label colorText={ColorText}>Title</Label>
      <Input
        type="text"
        name={"title"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.title}
        required
      />
      {errors.title && <ErrorCss>{errors.title}</ErrorCss>}

      <Label colorText={ColorText}>Description</Label>

      <TextArea
        cols={40}
        rows={7}
        name={"description"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.description}
        required
      />
      {errors.description && <ErrorCss>{errors.description}</ErrorCss>}

      <Button ColorBtn={ColorBtn} onClick={() => sendData(form)}>
        Save
      </Button>

      {loading && <Loader />}
      {response && <Message msg={toast} />}
    </Container>
  );
};

export default Index;
