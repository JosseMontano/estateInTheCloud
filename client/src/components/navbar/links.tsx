import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseModal } from "../../hooks/useModal";
import { Enlace } from "../../interface/nav";
import { logOut } from "../../services/auth";
import { Modal } from "../global/modal";
import ModalQuestion from "./../home/modalQuestion";

const Container = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
  @media (max-width: 858px) {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
`;

const A = styled.span`
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
  &:hover {
    background: #ffffff;
    color: #000;
    transition: 0.5s;
  }
  @media (max-width: 952px) {
    font-size: 16px;
  }
  @media (max-width: 858px) {
    font-size: 20px;
    &:hover {
      background: none;
      color: #0082e6;
    }
  }
`;

interface Params {
  v: Enlace;
  emailState: string;
}

const Links = ({ v, emailState }: Params) => {
  const navigate = useNavigate();
  const { isShown, toggle } = UseModal();

  const handleLogout = async (text: string) => {
    if (text === "Salir") {
      var resp = await logOut();
      if (!resp) {
        navigate("/");
      }
    }
    if (text === "Preguntas") {
      toggle();
    } else {
      navigate(`/profile/${emailState}`);
    }
  };

  return (
    <Container>
      <A onClick={() => handleLogout(v.text)}>{v.text}</A>

      <Modal isShown={isShown} hide={toggle} modalContent={<ModalQuestion />} />
    </Container>
  );
};

export default Links;
