import { useEffect, useState } from "react";
import styled from "styled-components";
import ContentBtn from "./contentBtn";
import ContentImg from "./contentImg";
import ContentMid from "./contentMid";
import ContentUser from "./contentUser";
import { getUserById } from "@/global/services/user";
import UseLoadData from "@/global/hooks/useFetch";
import  UserType from "@/global/interfaces/user";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
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
  gap:10px;
`;

interface Params {
  amountPublciation: number;
  idUser: number;
  toggle: () => void;
  isShown:boolean
  handleShowFav: () => void;
  showFav:boolean;
}
const Header = ({ amountPublciation, idUser, toggle, isShown, handleShowFav, showFav }: Params) => {
  const { data } = UseLoadData<UserType>(getUserById, idUser);
  const [exists, setExists] = useState(false);

  //Parse the vec to object 
  const dataObj = Object.assign({}, data[0])

  useEffect(() => {
    if (data) {
      setExists(true);
    }
  }, []);
  return (
    <Container>
      <ContentImg data={dataObj} exists={exists} />
      <ContainerContent>
        <ContentBtn isShown={isShown} toggle={toggle} handleShowFav={handleShowFav} showFav={showFav} />
        <ContentMid amountPublciation={amountPublciation} />
       {/*  <ContentUser /> */}
      </ContainerContent>
    </Container>
  );
};

export default Header;
