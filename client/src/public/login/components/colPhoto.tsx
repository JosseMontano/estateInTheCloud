import styled from "styled-components";
import ImgLogin from "../assets/imgLogin2.jpg";
import { ColorBtn } from "@/global/styles/globals";
const Container = styled.div<{ ColorBtn: string }>`
/*   background-color: ${(props) => props.ColorBtn}; */
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 300px;
  min-height: 100%;
  object-fit: cover;
`;
const ColPhoto = () => {
  return (
    <Container ColorBtn={ColorBtn}>
      <Image src={ImgLogin} />
    </Container>
  );
};

export default ColPhoto;
