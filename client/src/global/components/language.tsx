import styled from "styled-components";
import { useLanguage } from "@/global/context/languageContext";
import { ColorBtnSecond, ColorBtnThird } from "../styles/globals";

const ContainerLabel = styled.div`
  text-align: center;
  color: ${ColorBtnSecond};
  font-size: 22px;
  margin-top: 15px;
  input {
    margin: 0px 5px;
    background-color: transparent;
    color: ${ColorBtnSecond};
    border: none;
    border: 2px solid ${ColorBtnThird};
    padding: 7px;
    border-radius: 15px;
    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #000;
    }
  }
`;
const Index = () => {
  const { changeLanguage, text } = useLanguage();
  let inputJSX = [
    {
      click: () => changeLanguage("en"),
      val: text.languageValEn,
    },
    {
      click: () => changeLanguage("es"),
      val: text.languageValEs,
    },
  ];
  return (
    <ContainerLabel>
      {inputJSX.map((v, i) => (
        <input key={i} type={"button"} onClick={v.click} value={v.val} />
      ))}
    </ContainerLabel>
  );
};

export default Index;
