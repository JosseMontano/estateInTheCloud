import styled from "styled-components";
import { ColorBtn, ColorBtnSecond, ColorText } from "./globals";

export const Btn = styled.button<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  color: ${ColorText};
  border: 1px solid ${ColorText};
  border-radius: 0.2rem;
  font-size: 16px;
  background: transparent;
  padding: 5px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${ColorBtn};
    color:#fff;
  }
`;