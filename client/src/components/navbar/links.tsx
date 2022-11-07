import styled from "styled-components";
import { Enlace } from "../../interface/nav";
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
  isShown: boolean;
  toggle: () => void;
}

const Links = ({ v, isShown, toggle }: Params) => {
  return (
    <Container>
      <A onClick={v.click}>{v.text}</A>

      <Modal isShown={isShown} hide={toggle} modalContent={<ModalQuestion />} />
    </Container>
  );
};

export default Links;
