import { NameUserContext } from "@/context/nameUser";
import useLoadDataParams from "@/hooks/useFetch";
import { UseModal } from "@/hooks/useModal";
import { getUserById } from "@/services/user";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "../../global/modal";
import ContentBtn from "./contentBtn";
import ContentImg from "./contentImg";
import ContentMid from "./contentMid";
import ContentModal from "./publicCommenator/contentModal";
import { initialForm, validationsForm } from "@/validations/comments";
import { postComment } from "@/services/comment";
import { CommentsContext } from "@/context/comments";
import { getUser } from "@/services/user";
import { UseForm } from "jz-validation-form";
import { User } from "@/interface/user";
const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 40%;
  justify-content: center;
  border-bottom: 1px solid #a0a0a0;
  padding: 10px;
  width: 100%;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ContainerContent = styled.div`
  display: grid;
  place-content: center;
`;

interface Params {
  email?: string;
  idParam: number;
  cellphonenumber: string;
}
const Header = ({ email, idParam, cellphonenumber }: Params) => {
  const { idUser } = useContext(NameUserContext);
  const { data } = useLoadDataParams<User>(getUserById, idParam);
  const { isShown, toggle } = UseModal();
  const [exists, setExists] = useState(false);
  const { getComments } = useContext(CommentsContext);
  const [amountStart, setAmountStart] = useState(1);

  const [personCommentedId, setPersonCommentedId] = useState(0);

  useEffect(() => {
    if (data) {
      setExists(true);
    }
  }, []);

  /* Content Modal */
  const useForm = UseForm(
    initialForm,
    validationsForm,
    postComment,
    idUser,
    getComments
  );

  const SenData = (e: any) => {
    useForm.form.commentator = idUser;
    useForm.form.person_commented = personCommentedId;
    useForm.form.amount_start = amountStart;
    useForm.handleSubmit(e);
  };

  const getStart = (val: number) => {
    setAmountStart(val);
  };

  const handleGetPersonCommented = async () => {
    const { json } = await getUser<any>(email);
    if (json) {
      const { id_usuario } = Object.assign({}, json[0]);
      const auxId = id_usuario;
      setPersonCommentedId(auxId);
    }
  };

  return (
    <Container>
      <ContentImg data={data} exists={exists} />

      <ContainerContent>
        <ContentBtn
          email={email}
          cellphonenumber={cellphonenumber}
          toggle={toggle}
        />
        <ContentMid />
      </ContainerContent>

      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={
          <ContentModal
            useForm={useForm}
            getStart={getStart}
            SenData={SenData}
            handleGetPersonCommented={handleGetPersonCommented}
          />
        }
      />
    </Container>
  );
};

export default Header;
