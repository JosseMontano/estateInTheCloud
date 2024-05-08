import { useLanguage } from "@/global/context/languageContext";
import styled from "styled-components";
import useLoadData from "@/global/hooks/useFetch";
import ParamsTypeRealEstate from "@/global/interfaces/typeRealEstate";
import { getTypeRealEstate } from "@/global/services/realEstate";
import Btn from "./btn";
import { ColorBtn, ColorBtnFourth } from "@/global/styles/globals";

const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyleBtn = styled.button<{ catActually: string }>`
  border-radius: 15px;
  padding: 8px;
  margin: 0px 5px;
  background: ${(props) => props.catActually};
  color: #000;
  margin-bottom: 7px;
  border: none;
  &:hover {
    cursor: pointer;
    background: ${ColorBtnFourth};
    border: 1px solid ${ColorBtn};
  }
`;

interface ParamsType {
  catActually: string;
  changeData: (type: string) => void;
  toggle: () => void;
}

const Index = ({ catActually, changeData, toggle }: ParamsType) => {
  const { text } = useLanguage();
  const { data } = useLoadData<ParamsTypeRealEstate>(getTypeRealEstate);
  const background = catActually == "Custom" ? ColorBtnFourth : "#fff";
  
  return (
    <ContainerBtn>
      {data.map((v, i) => (
        <Btn catActually={catActually} changeData={changeData} v={v} key={i} />
      ))}
      <StyleBtn catActually={background} onClick={toggle}>
        {text.filterCustom}
      </StyleBtn>
    </ContainerBtn>
  );
};

export default Index;
