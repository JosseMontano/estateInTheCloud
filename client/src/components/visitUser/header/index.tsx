import { useNameUser } from "@/context/nameUserContext";
import useLoadDataParams from "@/global/hooks/useFetch";
import { UseModal } from "@/global/hooks/useModal";
import { getUserById } from "@/services/user";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "@/global/components/modal";
import ContentBtn from "./contentBtn";
import ContentImg from "./contentImg";
import ContentMid from "./contentMid";
import ContentModal from "./publicCommenator/contentModal";
import  UserType from "@/global/interfaces/user";
import { useComments } from "@/context/comments/commentsContext";
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
  const { isShown, toggle } = UseModal({});
  const [exists, setExists] = useState(false);

  const [amountStart, setAmountStart] = useState(1);

  const handleAddComment = async (description: string) => {
    const form = { amountStart, description, idUser, iUserNumber };
    await addComment(form);
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
