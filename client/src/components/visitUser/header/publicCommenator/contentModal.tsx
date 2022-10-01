import React, { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../../../context/toast";
import { UseForm } from "../../../../hooks/form/useFormComment";
import {
  Button,
  ColorText,
  ErrorCss,
  Input,
  TextArea,
  Title,
} from "../../../../styles/globals";
import { initialForm, validationsForm } from "../../../../validations/comments";
import Loader from "../../../loader";
import Message from "../../../message";
import { getUser } from "../../../../services/user";
interface params {
  personCommented: string | undefined;
  commentator: number;
}

const ContentModal = ({ personCommented, commentator }: params) => {
  const { form, errors, loading, response, handleChange, handleSubmit } =
    UseForm(initialForm, validationsForm);
  const { toast } = useContext(ToastContext);
  const [personCommentedId, setPersonCommentedId] = useState(0);
  const handleGetPersonCommented = async () => {
    const res = await getUser(personCommented);
    const objRes = Object.assign({}, res[0]);
    const auxId = objRes.id_usuario;
    setPersonCommentedId(auxId);
  };

  useEffect(() => {
    handleGetPersonCommented();
  }, []);

  const SenData = (e: any) => {
    form.commentator = commentator;
    form.person_commented = personCommentedId;
    handleSubmit(e);
  };
  return (
    <div>
      <Title colorText={ColorText}>Agregar un comentario</Title>
      <TextArea
        name={"description"}
        onChange={handleChange}
        value={form.description}
        cols={50}
      />
      {errors.description && <ErrorCss>{errors.description}</ErrorCss>}
      <Button ColorBtn={"#02ffcc1f"} onClick={(e) => SenData(e)}>
        Guardar
      </Button>
      {loading && <Loader />}
      {response && <Message msg={toast} />}
    </div>
  );
};

export default ContentModal;
