import { useNameUser } from "@/context/nameUserContext";
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
import { postComment } from "@/services/comment";
import { CommentsContext } from "@/context/commentsContext";
import { User } from "@/interface/user";
import { useMutation } from "@apollo/client";

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
}
const Header = ({ email, iUserNumber, cellphonenumber }: Params) => {
  const { idUser } = useNameUser();
  const { data } = useLoadDataParams<User>(getUserById, iUserNumber);
  const { isShown, toggle } = UseModal({});
  const [exists, setExists] = useState(false);
  const { getComments } = useContext(CommentsContext);
  const [amountStart, setAmountStart] = useState(1);

  useEffect(() => {
    if (data) {
      setExists(true);
    }
  }, []);

  const [CREATE_COMMENT] = useMutation(postComment());

  const handleAddComment = async (description: string) => {
    await CREATE_COMMENT({
      variables: {
        person_commented: iUserNumber,
        commentator: idUser,
        description,
        amount_start: amountStart,
      },
    });
    alert("guardado");
  };

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
        <ContentMid />
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
