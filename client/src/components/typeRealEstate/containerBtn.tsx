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
  let btnJSX: BtnJSXType[] = [
    {
      onclick: () => changeData("Casa"),
      text: "Casas",
    },
    {
      onclick: () => changeData("Departamento"),
      text: "Departamentos",
    },
    {
      onclick: () => changeData("Monoambiente"),
      text: "Monoambientes",
    },
    {
      onclick: () => changeData("Garzonier"),
      text: "Garzoniers",
    },
    {
      onclick: () => changeData("Dormitorio"),
      text: "Dormitorios",
    },
    {
      onclick: () => changeData("Almacen"),
      text: "Almacenes",
    },
    {
      onclick: () => changeData("Tienda"),
      text: "Tiendas",
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
