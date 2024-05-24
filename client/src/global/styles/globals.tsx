import styled from "styled-components";

export const ColorBtn = "#e63c19"; //#a4bbf5
export const ColorBtnSecond = "#b83014"; //#ff5861
export const ColorBtnThird = "#872612"; //#e559ae
export const ColorBtnFourth = "#fce6e3"; //#e559ae
export const ColorText = "#000";
export const ColorTextP = "#2c2c2c";
export const borderImg = "10px";

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
  color: #000;
  width: 100%;
`;

export const Select = styled.select`
  width: max-content;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  color: #2c2c2c;
  scrollbar-width: thin;
  scrollbar-color: #e63c19 transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e63c19;
    border-radius: 20px;
    border: 3px solid transparent;
  }

  &:focus {
    outline: none;
    border-color: #e63c19;
  }
`;

export const styleMap = (height = "350px") => {
  return {
    height: height,
    width: "350px",
    marginBottom: "20px",
  };
};

export const Title = styled.h2<{ colorText: string }>`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.colorText};
`;

export const SubTitle = styled.h3<{ colorText: string }>`
  font-size: 26px;
  font-weight: bold;
  color: ${(props) => props.colorText};
`;

export const ContainerMargin = styled.div`
  margin: 50px;
`;
export const marginGlobal = "50px";
export const marginInElements = "15px";
//the margin global is 10px
