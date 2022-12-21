import { useLanguage } from "context/languageContext";
import styled from "styled-components";

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
}

interface BtnJSXType {
  onclick: () => void;
  text: string;
}

const Index = ({ changeData }: ParamsType) => {
  const { text } = useLanguage();
  let btnJSX: BtnJSXType[] = [
    {
      onclick: () => changeData("Casa"),
      text: text.filterHouse,
    },
    {
      onclick: () => changeData("Departamento"),
      text: text.filterDepartament,
    },
    {
      onclick: () => changeData("Monoambiente"),
      text: text.filterStudio,
    },
    {
      onclick: () => changeData("Garzonier"),
      text: text.filterGarzonier,
    },
    {
      onclick: () => changeData("Dormitorio"),
      text: text.filterBedroom,
    },
    {
      onclick: () => changeData("Almacen"),
      text: text.filterStore,
    },
    {
      onclick: () => changeData("Tienda"),
      text: text.filterShop,
    },
  ];

  return (
    <ContainerBtn>
      {btnJSX.map((v, i) => (
        <Btn key={i} onClick={v.onclick}>
          {v.text}
        </Btn>
      ))}
    </ContainerBtn>
  );
};

export default Index;
