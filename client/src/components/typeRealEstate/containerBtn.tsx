import { useLanguage } from "@/context/languageContext";
import styled from "styled-components";
import useLoadData from "@/hooks/useFetch";
import ParamsTypeRealEstate from "@/interface/typeRealEstate";
import { getTypeRealEstate } from "@/services/realEstate";

const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Btn = styled.button`
  border-radius: 15px;
  padding: 8px;
  margin: 0px 5px;
  background: #243f47;
  color: #fff;
  &:hover {
    cursor: pointer;
    background: #132024;
  }
`;

interface ParamsType {
  changeData: (type: string) => void;
  toggle: () => void;
}

interface BtnJSXType {
  onclick: () => void;
  text: string;
}

const Index = ({ changeData, toggle }: ParamsType) => {
  const { text } = useLanguage();
  const { data } = useLoadData<ParamsTypeRealEstate>(getTypeRealEstate);

  return (
    <ContainerBtn>
      {data.map((v, i) => (
        <Btn key={i} onClick={() => changeData(v.name_type)}>
          {v.name_type}
        </Btn>
      ))}
    </ContainerBtn>
  );
};

export default Index;
