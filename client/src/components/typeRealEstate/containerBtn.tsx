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

const Index = ({ changeData }: ParamsType) => {
  return (
    <ContainerBtn>
      <Btn onClick={() => changeData("Casa")}>Casas</Btn>
      <Btn onClick={() => changeData("Departamento")}>Departamento</Btn>
      <Btn onClick={() => changeData("Monoambiente")}>Monoambiente</Btn>
      <Btn onClick={() => changeData("Garzonier")}>Garzonier</Btn>
      <Btn onClick={() => changeData("Dormitorio")}>Dormitorio</Btn>
      <Btn onClick={() => changeData("Almacen")}>Almacen</Btn>
      <Btn onClick={() => changeData("Tienda")}>Tienda</Btn>
    </ContainerBtn>
  );
};

export default Index;
