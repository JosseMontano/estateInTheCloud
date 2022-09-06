import styled from "styled-components";

export const ColorBtn = "#a4bbf5";
export const ColorBtnSecond = "#ff5861";
export const ColorText = "#fff";
export const Button = styled.button<{ ColorBtn: string }>`
  background-color: ${(props) => props.ColorBtn};
  color: #fff;
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 0.2rem;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  &:hover {
    transform: scale(1.1);
    background-color: #859ad0;
  }
`;
export const Input = styled.input`
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  color: #333;
  padding: 10px;
  border-radius: 0.2rem;
  border: none;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  width: 90%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;
export const Label = styled.label<{ colorText:string }>`
  font-size: 22px;
  margin-top: 10px;
  color: ${(props) => props.colorText};
`;
//the margin global is 10px
