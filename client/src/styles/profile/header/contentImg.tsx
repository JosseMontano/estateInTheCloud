import styled from "styled-components";

export const Container = styled.div`
  justify-self: center;
  position: relative;
  display: inline-block;
  &:hover .changePhoto {
    display: grid;
    place-content: center;
  }
`;
export const Img = styled.img`
  border-radius: 100%;
  height: 180px;
  object-fit: cover;
`;
export const ChangePhoto = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 100%;
`;
export const InputFile = styled.input``;