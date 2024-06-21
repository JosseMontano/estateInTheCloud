import { useNameUser } from "@/global/context/nameUserContext";
import useLoadDataParams from "@/global/hooks/useFetch";
import { getUserById } from "@/global/services/user";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useModal, Modal } from "jz-modal";
import ContentBtn from "./contentBtn";
import ContentImg from "./contentImg";
import ContentMid from "./contentMid";
import ContentModal from "./publicCommentator/contentModal";
import  UserType from "@/global/interfaces/user";
import { useComments } from "@/public/visitUser/context/commentsContext";
import { CommentsPostType } from "../../interfaces/comments";
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
  iUserNumber: number;
  cellphonenumber: string;
  amountPublication: number;
}
const Header = (params: Params) => {
  const { email, iUserNumber, cellphonenumber, amountPublication } = params;
  const { idUser } = useNameUser();
  const { addComment } = useComments();
  const { data } = useLoadDataParams<UserType>(getUserById, iUserNumber);
  const { isShown, toggle } = useModal({});
  const [exists, setExists] = useState(false);

  const [amountStart, setAmountStart] = useState(1);

  const handleAddComment = async (description: string) => {
    var id_user_commentator = idUser
    let id_user_visited= iUserNumber
    const form:CommentsPostType = { amountStart, description, id_user_commentator, id_user_visited };
 
    await addComment(form);
    toggle();
  };

  useEffect(() => {
    if (data) {
      setExists(true);
    }
  }, []);

  const getStart = (val: number) => {
    setAmountStart(val);
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
        <ContentMid amountPublication={amountPublication} />
      </ContainerContent>

      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={
          <ContentModal getStart={getStart} SenData={handleAddComment} />
        }
      />
    </Container>
  );
};

export default Header;
