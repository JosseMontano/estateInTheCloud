import styled from "styled-components";
import { Enlace, currentLink } from "@/global/interfaces/nav";
import { ColorBtn } from "@/global/styles/globals";

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

const A = styled.span<{ border: string }>`
  color: #000;
  font-size: 17px;
  padding: 7px 13px;
  cursor: pointer;
  border-radius: 3px;
  text-transform: uppercase;
  border: none;
  border-bottom: 2px solid ${(props) => props.border};
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
  currentLink: currentLink;
}

const Links = ({ v, currentLink }: Params) => {
  const border = v.val === currentLink ? ColorBtn : "transparent";
  return (
    <Container>
      <A border={border} onClick={v.click}>
        {v.text}
      </A>
    </Container>
  );
};

export default Links;
