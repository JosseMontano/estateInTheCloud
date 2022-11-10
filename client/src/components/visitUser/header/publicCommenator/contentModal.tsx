import { useContext, useEffect, useState } from "react";
import { UseForm } from "@/hooks/useForm";
import {
  Button,
  ColorText,
  ErrorCss,
  TextArea,
  Title,
} from "@/styles/globals";
import { initialForm, validationsForm } from "@/validations/comments";
import Loader from "../../../global/loading";
import Message from "../../../global/message";
import { getUser } from "@/services/user";
import { CommentsContext } from "@/context/comments";
import { postComment } from "@/services/comment";
import Starts from "./starts";

interface params {
  personCommented: string | undefined;
  commentator: number;
}

const ContentModal = ({ personCommented, commentator }: params) => {
  const { getComments } = useContext(CommentsContext);
  const [idUser, setidUser] = useState(0);
  const [amountStart, setAmountStart] = useState(1);
  const { form, errors, loading, response, handleChange, handleSubmit, msg } =
    UseForm(initialForm, validationsForm, postComment, idUser, getComments);

  const [personCommentedId, setPersonCommentedId] = useState(0);
  const handleGetPersonCommented = async () => {
    const res = await getUser(personCommented);
    const objRes = Object.assign({}, res[0]);
    const auxId = objRes.id_usuario;
    setidUser(auxId);
    setPersonCommentedId(auxId);
  };

  useEffect(() => {
    handleGetPersonCommented();
  }, []);

  const SenData = (e: any) => {
    form.commentator = commentator;
    form.person_commented = personCommentedId;
    form.amount_start = amountStart;
    handleSubmit(e);
  };

  const getStart = (val: number) => {
    setAmountStart(val);
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

      <Starts getStart={getStart} />

      <Button ColorBtn={"#02ffcc1f"} onClick={(e) => SenData(e)}>
        Guardar
      </Button>
      {loading && <Loader />}
      {response && <Message msg={msg} />}
    </div>
  );
};

export default ContentModal;
