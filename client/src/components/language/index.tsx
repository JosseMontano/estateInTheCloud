import styled from "styled-components";
import { useLanguage } from "@/context/languageContext";

const ContainerLabel = styled.div`
  text-align: center;
  color: #fff;
  font-size: 22px;
  margin-top: 10px;
  button {
    margin: 0px 5px;
    background-color: transparent;
    color: #fff;
    border: none;
    border: 2px solid #fff;
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
  const { changeLanguage } = useLanguage();
  return (
    <ContainerLabel>
      <input type={"button"} onClick={() => changeLanguage("en")} value="Ingles" />
      <input type={"button"} onClick={() => changeLanguage("es")} value="Español" />
    </ContainerLabel>
  );
};

export default Index;
