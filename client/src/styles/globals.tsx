import styled from "styled-components";

export const ColorBtn = "#a4bbf5";
export const ColorBtnSecond = "#ff5861";
export const ColorBtnThird = "#e559ae";
export const ColorText = "#fff";

export const ContainerInputFile = styled.div`
  margin-top: 15px;
  position: relative;
  display: inline-block;
  &::before {
    background-color: #1e3485;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    content: "Seleccionar Img"; /* texto por defecto */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
export const InputFile = styled.input`
  margin-top: 15px;
  color: #fff;
`;

export const Title = styled.h2<{ colorText: string }>`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.colorText};
`;
export const ContainerMargin = styled.div`
  margin: 50px;
`;
export const marginGlobal = "50px";
export const marginInElements = "15px";
//the margin global is 10px
