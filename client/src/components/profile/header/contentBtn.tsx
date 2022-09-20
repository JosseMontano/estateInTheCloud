import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NameUserContext } from "../../../context/nameUser";
import { marginInElements } from "../../../styles/globals";

const Container = styled.div`
  display: flex;
 @media screen and (max-width:450px) {
  display: flex;
  flex-direction: column;
 }
`;
const SPAN = styled.span<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  align-self: center;
`;
const Btn = styled.button<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 0.2rem;
  font-size: 16px;
  background: transparent;
  padding: 5px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;
interface Params{
  email?:string
}
const ContentBtn = (params:Params) => {
  const { idUser  } = useContext(NameUserContext);
  const navigate = useNavigate();
  return (
    <Container>
      <SPAN marginInElements={marginInElements}>{params.email}</SPAN>
      <Btn marginInElements={marginInElements}>Enviar mensaje</Btn>
      <Btn marginInElements={marginInElements}>Enviar solicitud</Btn>
      <Btn onClick={()=>{navigate(`/add-data-real-estate/${idUser}`)}} marginInElements={marginInElements}>Crear publicacion</Btn>
    </Container>
  );
};

export default ContentBtn;
