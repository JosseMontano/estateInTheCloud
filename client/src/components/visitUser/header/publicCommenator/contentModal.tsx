import React, { useContext } from "react";
import { ToastContext } from "../../../../context/toast";
import { UseForm } from "../../../../hooks/form/useFormComment";
import { ColorText, ErrorCss, Input, Label } from "../../../../styles/globals";
import { initialForm, validationsForm } from "../../../../validations/comments";
import Loader from "../../../loader";
import Message from '../../../message'
const ContentModal = () => {
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
  return (
    <div>
      <h2>Agregar un comentario</h2>

      <Label colorText={ColorText}>Comentario</Label>
      <Input
        type="text"
        name={"description"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.description}
        required
      />
      {errors.description.errors && <ErrorCss>{errors.description.errors}</ErrorCss>}
      {loading && <Loader />}
      {response && <Message msg={toast} />}
    </div>
  );
};

export default ContentModal;
