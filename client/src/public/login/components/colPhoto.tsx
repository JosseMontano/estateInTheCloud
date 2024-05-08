import styled from "styled-components";
import ImgLogin from "../assets/imgLogin2.jpg";
import { ColorBtn } from "@/global/styles/globals";
const Container = styled.div<{ ColorBtn: string }>`
/*   background-color: ${(props) => props.ColorBtn}; */
  display: grid;
  place-content: center;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 500px;
  height: 600px;
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
